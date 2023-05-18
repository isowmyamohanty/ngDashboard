import {GridOptions, ICellEditorParams} from 'ag-grid-community/main';

export class GridStyling {
    private filterValue:string = 'NONE';
    private isExternalFilterPresent = false;

    setCellColorBasedonStatus(params){
        if(params.value === 'ACTIVE')
            return {color: 'black', backgroundColor: 'green'}
        else if(params.value === 'DRAFT')
            return {color: 'black', backgroundColor: 'green'}
            else return {};
    }
    initCommonGridProperties(grid: GridOptions) {
        grid.rowHeight = 22;
        grid.rowSelection = 'multiple';
        grid.suppressRowClickSelection= true;
        grid.suppressDragLeaveHidesColumns = true;
        grid.suppressRowDeselection= false;
        grid.overlayLoadingTemplate = '<i class="spinner">Loading</i>'
        grid.overlayNoRowsTemplate='<span style="padding:10px; border: 1px solid; border-radius: 10px; background: #302e2e">No Items Present</span>'
        grid.onGridReady = () => {
            grid.api?.sizeColumnsToFit()
            grid.api?.hideOverlay()
        }
    }
    initCommonGridProperties_fitColumns(grid: GridOptions) {
        grid.rowHeight = 22;
        grid.rowSelection = 'multiple';
        grid.suppressRowClickSelection= true;
        grid.suppressDragLeaveHidesColumns = true;
        grid.suppressRowDeselection= false;
        grid.suppressColumnVirtualisation = true;
        grid.overlayLoadingTemplate = '<i class="spinner">Loading</i>'
        grid.overlayNoRowsTemplate='<span style="padding:10px; border: 1px solid; border-radius: 10px; background: #302e2e">No Items Present</span>'
        grid.onGridReady = () => {
            grid.api?.sizeColumnsToFit()
            grid.api?.hideOverlay()
        }
        grid.isExternalFilterPresent = () => {
            return this.isExternalFilterPresent;
        }
        grid.doesExternalFilterPass = (node) => {
            return (node.data.status === this.filterValue.toUpperCase());
        }
    }

    externalFilterChanged(grid: GridOptions, newFilterValue: string){
        if(newFilterValue !== 'NONE'){
            this.isExternalFilterPresent = true;
        }else {
            this.isExternalFilterPresent = false;
        }
        this.filterValue = newFilterValue;
        grid.api?.onFilterChanged();
    }

    autoSizeColumns(grid: GridOptions, columnDefs: any[]){
        let allColumnIds = [];
        columnDefs.forEach(function (columnDef) {
            allColumnIds.push(columnDef.field);
        });
        grid.columnApi?.autoSizeColumns(allColumnIds);
    }

    selectAllrenderer(params: GridOptions){
        let eHeader = document.createElement('input');
        let counter = 0;
        let stopSelection = false;
        eHeader.setAttribute('type', 'checkbox');
        eHeader.setAttribute('position', 'center');
        eHeader.addEventListener('change', function(e) {
            if(this.checked){
                params.api?.forEachNodeAfterFilter(function (node){
                    if(!stopSelection){
                        if(node.data.status === 'PENDING'){
                            if(counter == 150){
                                stopSelection = true;
                            }else{
                                node.setSelected(true);
                                counter++;
                            }
                        }
                    }
                })
            }else {
                params.api?.deselectAll();
                counter = 0;
                stopSelection = false;
            }
        });
        return eHeader;
    }

    descriptionColumnCellRenderer(params: ICellEditorParams){
        let espan = document.createElement('a');
        if(espan != null){
            espan.innerHTML = params.value;
            espan.style.color = '#9bc2e6';
        }
        return espan;
    }

    renderIfZero(params: ICellEditorParams){
        let espan = document.createElement('span');
        if(params != null){
            if(params.value == 0){
                espan.innerHTML = '-';
            }else{
                espan.innerHTML = params.value;
            }
        }
        return espan;
    }

    renderNumberTo2decimal(params: ICellEditorParams){
        let espan = document.createElement('span');
        if(params != null){
            if(params.value == null){
                espan.innerHTML = '';
            }else{
                let value = Number(params.value);
                espan.innerHTML = value.toFixed(2);
            }
        }
        return espan;
    }
    renderNumberTo2decimalAndNegative(params: ICellEditorParams){
        let espan = document.createElement('span');
        if(params != null){
            if(params.value == null){
                espan.innerHTML = '';
            }else{
                let value = Number(params.value);
                let decValue = parseInt(value.toFixed(2), 10);

                if(decValue > 0) {
                    espan.innerHTML = decValue + ''
                }else{
                    espan.innerHTML = '(' + Math.abs(decValue) + ')'
                }
            }
        }
        return espan;
    }

    renderNumberToNegative(params: ICellEditorParams){
        let espan = document.createElement('span');
        if(params != null){
            if(params.value == null){
                espan.innerHTML = '';
            }else{
                let value = Number(params.value);
                let decValue = parseFloat(value.toFixed(2));

                if(params.data.isNegative === 'Y') {
                    espan.innerHTML = '(' + Math.abs(decValue) + ')'
                }else{
                    espan.innerHTML = decValue + ''
                }
            }
        }
        return espan;
    }

    renderCellShowInProgress(params: ICellEditorParams){
        let espan = document.createElement('span');
        if(params !== null){
            if(params.value === 'PROCESSING'){
                espan.innerHTML = '<span>PROCESSING</span>'
            }else{
                espan.innerHTML = params.value;
            }
        }
        return espan;
    }

    setDateFilter(filterLocalDateAtMidnight: any, cellValue: any){
        let dateAsString = new Date(cellValue.toString());
        let day = dateAsString.getDate();
        let month = dateAsString.getMonth();
        let year = dateAsString.getFullYear();
        let cellDate = new Date(year, month, day);
        if(filterLocalDateAtMidnight.getTime() === cellDate.getTime()){
            return 0;
        }
        if(cellDate < filterLocalDateAtMidnight){
            return -1;
        }
        if(cellDate > filterLocalDateAtMidnight){
            return 1;
        }
    }
    showDisplayDateFormat(params: ICellEditorParams){
        if(params.value){
            let day = Number(params.value.substr(6,2));
            let month = Number(params.value.substr(4,2));
            let year = Number(params.value.substr(0,4));
            let displayDate = day+'/'+month+'/'+year;
            return displayDate;
        }else{
            return null;
        }
    }
}
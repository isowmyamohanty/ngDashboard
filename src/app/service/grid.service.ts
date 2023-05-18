import {GridOptions, RowDataTransaction} from 'ag-grid-community/main';
export class GridService {
    insertRowsAtBeginingOfGrid(data:any, grid: GridOptions) {
        for (let newRow of data){
            this.insertRowAtTop(newRow, grid);
        }
    }
    insertRowAtTop(row:any, grid: GridOptions){
        
        let trans: RowDataTransaction = {
            add: row,
            addIndex: 0
        };
        if(grid != null)
            grid.api?.applyTransaction(trans);
    }
    showGridLoadingOverlay(grid: GridOptions){
        grid.api?.showLoadingOverlay();
    }
    hideGridOverlay(grid: GridOptions){
        grid.api?.hideOverlay();
    }
}
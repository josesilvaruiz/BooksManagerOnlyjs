class TableHandler
{
    constructor(parentNode, modelType, buttons, excludedColumns)
    {          
        this.SelectedRow = null;        
        this.Buttons = buttons;
        this.ExcludedColumns = excludedColumns;

        var template = new modelType();        

        this.TableNode = document.createElement("TABLE");    
        parentNode.appendChild(this.TableNode);

        var header = this.TableNode.createTHead();
        
        this.TBody = document.createElement("tbody");
        this.TableNode.appendChild(this.TBody);
        
        var row = header.insertRow(0); 

        Object.keys(template).forEach(function(prop, index) 
        {
            if (excludedColumns.findIndex((s) => prop == s) == -1)
            {
                var cell = row.insertCell();
                cell.innerHTML = "<b>" + prop + "</b>"; 
            }
        });
    }

    AddRow(model)
    {
        let row = this.TBody.insertRow(); 
        row.Model = model;

        let excludedColumns = this.ExcludedColumns

        //for (let prop in model)
        Object.keys(model).forEach(function(prop, index) 
        {
            if (excludedColumns.findIndex((s) => prop == s) == -1)
            {
                let cell = row.insertCell();
                cell.id = prop;
                cell.innerHTML = model[prop];
            }
        });

        for(let i in this.Buttons)
        {
            let xx = this.Buttons[i];
            this.CreateButton(xx.Text, row, xx.Action);
        }
    }

    CreateButton(text, row, action)
    {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = text;
    
        let cell = row.insertCell();
        cell.appendChild(btn);

        btn.onclick = () => { action(row.Model); };
    }

    UpdateRow(model)
    {
        var rows = Array.from(this.TBody.rows);
        let rowToUpdate = rows.find((row) => row.Model === model);

        let numerodeceldas = rowToUpdate.childNodes.length;
        for (let i = 0; i < numerodeceldas; i++)
        {
            let cell = rowToUpdate.childNodes[i];

            if(model[cell.id])
                cell.innerHTML = model[cell.id];
        }   
        
        this.Clean();
    }

    DeleteRow(model)
    {
        var rows = Array.from(this.TBody.rows);
        let rowToDelete = rows.find((row) => row.Model === model);

        rowToDelete.parentNode.removeChild(rowToDelete);
    }

    Clean()
    {
        this.SelectedRow = null;
    }
}

class TableButtonInfo
{
    constructor(text, action)
    {
        this.Text = text;
        this.Action = action;
    }
}
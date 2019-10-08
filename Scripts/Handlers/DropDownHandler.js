class DropDownHandler
{
    constructor(options, control, displayProperty, btnSelector, onSelectedOption)
    {
        this.Options = options;
        this.Control = control;
        this.DisplayProperty = displayProperty;
        this.BtnSelector = btnSelector;
        this.OnSelectedOption = onSelectedOption;
    }

    LoadOptions()
    {
        this.Control.innerHTML = "";

        for (let i in this.Options)
        {
            var option = this.Options[i];
            
            var label = this.CreateLabel(option);
            this.Control.appendChild(label);
        }
    }

    CreateLabel(model)
    {
        var label = document.createElement("LABEL");
        label.innerHTML = model[this.DisplayProperty];
        label.Model = model;

        label.onclick = (event) =>
        {
            //alert(model[this.DisplayProperty]);
            this.BtnSelector.innerHTML = model[this.DisplayProperty];
            this.OnSelectedOption(model);
        };

        return label;
    }

    ShowOptions()
    {
        this.LoadOptions();
        this.Control.classList.toggle("show");
    }
}
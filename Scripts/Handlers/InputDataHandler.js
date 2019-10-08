class InputDataHandler
{        
    constructor()
    {

    }

    GetAllModelPropertiesInNode(node)
    {
        let output = [];

        let subnodes = node.querySelectorAll('[property]');

        for (let i in subnodes)
        {
            let subnode = subnodes[i];
            if (subnode.getAttribute !== undefined)
            {
                let property = subnode.getAttribute("property");

                if ( subnode.tagName === "INPUT" && 
                    (subnode.type === "text" || 
                    subnode.type === "number" || 
                    subnode.type === "email" || 
                    subnode.type === "date"))
                {
                    let propValue = subnode.value;
                    let obj = { Property: property, Value: propValue, Node: subnode };
                    output.push(obj);
                }
            }
        }    
        
        return output;
    }

    FillModel(model, node)
    {
        let propValues = this.GetAllModelPropertiesInNode(node);

        for (let i in propValues)
        {
            let info = propValues[i];
            model[info.Property] = info.Value;
        }
    }

    FillForm(model, node)
    {
        let propValues = this.GetAllModelPropertiesInNode(node);

        for (let i in propValues)
        {
            let info = propValues[i];
            info.Node.value = model[info.Property] ;
        }
    }

    CleanForm(node)
    {
        let propValues = this.GetAllModelPropertiesInNode(node);

        for (let i in propValues)
        {
            let info = propValues[i];
            info.Node.value = "" ;
        }
    }

    CleanForm2(type, node)
    {
        var emptyObject = new type();
        this.FillForm(emptyObject, node)
    }

    
}
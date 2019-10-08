class Persona
{
    get FullName()
    {
        return this.Name + " " + this.Surname;
    }

    get Age()
    {
        return this._Age;
    }
    set Age(value)
    {
        if(value < 0)
        {
            alert("la edad es incorrecta, no se admiten números menor que 0")
        }

        this._age = value;
    }

    constructor()
    {
        this.Name = "";
        this.Surname = "";
        this._Age = 0;
    }
}

var p = new Persona();
p.Name = "Lolo";
p.Surname = "Pocholo";
p._Age = -10;
p.Age = -10;

alert(p.FullName);

alert(p.Age);
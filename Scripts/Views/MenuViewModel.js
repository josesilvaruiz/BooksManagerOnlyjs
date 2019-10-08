class MenuViewModel
{
    constructor()
    {

    }

    ShowView(menuView) //1, 2 o 3
    {
        switch(menuView)
        {
            case MenusViews.Books:  //1
                BooksView.style.display = "block";
                UsersView.style.display = "none";
                LendsView.style.display = "none";      
                                
                break;

            case MenusViews.Users:  //2
                BooksView.style.display = "none";
                UsersView.style.display = "block";
                LendsView.style.display = "none";

                break;

            case MenusViews.Lends:  //3
                BooksView.style.display = "none";
                UsersView.style.display = "none";
                LendsView.style.display = "block";

                break;

        }
    }
}

MenusViews = 
{
    Books : 1,
    Users : 2,
    Lends : 3
}
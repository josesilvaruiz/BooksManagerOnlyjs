class Lend
{
    constructor(book, lendDays)
    {
        this.Book = book;
        this.Title = book === undefined ? "" : book.Title;

        
        this.LendedOn = new Date();
        this.ExpiresOn = new Date();

        this.LendedOn.setMilliseconds(Date.now());
        this.ExpiresOn.setMilliseconds(Date.now());

        this.ExpiresOn.setMonth(this.ExpiresOn.getMonth() + 1);
    }
}
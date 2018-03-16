/*
Metodo que contruye un contacto
*/
var Contact=function(row){
    this.id=_.uniqueId();
    if(row!=undefined){
        this.first_name=row.first_name;
        this.last_name=row.last_name;
        this.email=row.email;
        this.country=row.country;
    }
}
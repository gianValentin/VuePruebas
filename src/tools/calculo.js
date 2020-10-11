export const edadCalulada = (dateNac) => {
    var edad = 0
    const fechaActual = new Date()

    if(dateNac !== ''){
      const array_fecha = dateNac.split("-")
      console.log(array_fecha)
      var año = parseInt(array_fecha[0])
      var mes = parseInt(array_fecha[1])
      var dia = parseInt(array_fecha[2])

      if (año<=99)
        año +=1900

      console.log("este es el año: "+año)
      console.log("este es el año actual: "+fechaActual.getFullYear())

      edad=fechaActual.getFullYear()- año - 1

      console.log(edad)

       if (fechaActual.getMonth() + 1 - mes < 0)
        return edad

      if (fechaActual.getMonth() + 1 - mes > 0)
        return edad+1

  
      if (fechaActual.getUTCDate() - dia >= 0)
        return edad + 1

    }    
    return edad
}
let defaultCity = '北京'

// try 语句，如果 try 报错，则执行 catch
try {
    if(localStorage.city) {
        defaultCity = localStorage.city
    }
} catch(e) {}

export default  {
    city: defaultCity
}

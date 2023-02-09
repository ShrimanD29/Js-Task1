const validate=(str)=>{
    if(str.match("(^[A-Z]\. [A-Z][a-z]+$)|(^[A-Z]\. [A-Z]\. [A-Z][a-z]+)|(^[A-Z][a-z]+ [A-Z]\. [A-Z][a-z]+$)"))
    {
        return " ";
    }
    else
    return "";
    }
    
    var s="H. G. Wells"
    var t="H wells"
    let r=validate(s);
    let v=validate(t);
    if(r.length>0)
    console.log("true");
    else
    console.log("false");
    if(v.length>0)
    console.log("true");
    else
    console.log("false");
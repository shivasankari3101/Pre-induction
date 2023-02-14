let i=1;
const counter = () =>{
    postMesssge(i);
    i=i+1;
    setTimeout("counter()",1000);
}

counter();
function fetchAPI(){
    const url="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=AM9Q9NH83ZZLKYPNANBTK4QWC"
    fetch(url)
    .then((res)=>res.json())
    .then(renderUI);
}
 fetchAPI()
 function renderUI(data){
    //console.log(data);
 
 const row=document.createElement("tr");
 //const cell=documen.createElement("th");
 let cell=document.createElement("th")
 cell.innerText='Date';
 row.appendChild(cell);

 const cell2=document.createElement("th");
 cell2.innerText="maximum Temprature";
 row.appendchild(cell2);

 const cell3=document.createElement("th");
 cell3.innerText="Minimum Temprature";
 row.appendChild(cell3);

 row.append(row);
  const childRow=document.createElement("row");
  const c1=document.createElement("th");
  cell1.innerText='Date';
  childRow.appendChild(c1);
  const c2=document.createElement("th");
  cell2.innerText='maximum Temprature';
  childRow.appendChild(c2);
  Root.appendChild(childRow);
 
}
renderUI();


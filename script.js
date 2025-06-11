function insert_Row() {
   let tab = document.getElementById("sampleTable").querySelector("tbody");
	
	let newRow = document.createElement("tr");
	
	newRow.innerHTML = `<td>New Cell1</td> 
		                <td>New Cell2</td>`;
	let firstRow = tab.querySelector("tr");
	tab.insertBefore(newRow, firstRow);
  
  
}

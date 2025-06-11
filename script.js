function insert_Row() {
   let tab = document.getElementById("sampleTable");
	let newRow = document.createElement("tr");
	newRow.innerHTML = `<td>New Cell1</td> 
		                <td>New Cell2</td>`;
	tab.insertBefore(newRow, tab.firstChild);
  
  
}

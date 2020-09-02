let ds=["Arrays","Stack","Queue","Trees","Graphs","Maps","Hash Table"];
console.log("Original Array: "+ds);
console.log("Elements containing 'a':\n");
for(let i=0; i<ds.length; i++)
{
	if(ds[i].search('a')!=-1)
		console.log(ds[i]+"\n");
}
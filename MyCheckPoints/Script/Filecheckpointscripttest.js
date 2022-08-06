function compareFileContents()
{
 // Files.smartbear1_txt.Check("C:\\Users\\NobleProg\\Desktop\\smartbear2.txt");
 
 //Short cut - Ctrl +Shift +Space inside the brackets to see the siganture
 //Files.Compare("smartbear1_txt","C:\\Users\\NobleProg\\Desktop\\smartbear2.txt");
 
 // After finding the difference between teh files, we can provide the hash value difference.
  Files.Compare("smartbear1_txt","C:\\Users\\NobleProg\\Desktop\\smartbear2.txt", -354687896);
  
  //Now make the files identical and run this. Since the files are equal, it won't even check teh hash value.
 // Files.Compare("smartbear1_txt","C:\\Users\\NobleProg\\Desktop\\smartbear2.txt", -354687896);
  
}
function writeToNotePad()
{
  //Sys.Process("notepad").Window("Notepad", "Untitled - Notepad", 1).Window("Edit", "", 1).wText = " Hello SmartBear. This is memory."
  
  // The below line would fail//
  //NameMapping.Sys.NotepadApp.NPMainWindow.NPEdit = "Hello SmartBear. This is Name Mapping";
 
  //This will pass 
 // NameMapping.Sys.NotepadApp.NPMainWindow.NPEdit.wText = "Hello SmartBear. This is Name Mapping";
  
  
  
  //Use Alias
  
  Aliases.NPEditAlias.wText = " Hello SmartBear. This is Alias. Window 1";
  
  
  Sys.Process("notepad")
  .Window("Notepad", "Untitled - Notepad", 1).Window("Edit", "", 1).wText = " Hello SmartBear. This is memory."
  
}
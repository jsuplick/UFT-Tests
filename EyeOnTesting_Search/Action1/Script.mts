'Created 13 July 2017 author Jean Suplick
'Stored in GitHub repo UFT-Tests

Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q").Set "Octane" @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q").Submit @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,_2").WebElement("Results For: Octane").Check CheckPoint("Results For: Octane") @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software, 2").WebElement("Results For: Octane")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,_2").Sync @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,_2")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("EyeOnTesting - Orasi Software,").CloseAllTabs 



'Created 13 July 2017 author Jean Suplick

Browser("EyeOnTesting - Orasi Software,").Page("EyeOnTesting - Orasi Software,").WebEdit("q").Set "Octnae" @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("EyeOnTesting - Orasi Software,").WebEdit("q")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("EyeOnTesting - Orasi Software,").WebEdit("q").Submit @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("EyeOnTesting - Orasi Software,").WebEdit("q")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebElement("Results For: Octnae0Results").Click @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebElement("Results For: Octnae0Results")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebElement("0Results Found").Check CheckPoint("0Results Found") @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebElement("0Results Found")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q").Set "Octane" @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q")_;_script infofile_;_ZIP::ssf5.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q").Submit @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,").WebEdit("q")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,_2").WebElement("Results For: Octane").Check CheckPoint("Results For: Octane") @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software, 2").WebElement("Results For: Octane")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,_2").Sync @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software,").Page("Search - Orasi Software,_2")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("EyeOnTesting - Orasi Software,").CloseAllTabs 
'Reporter.ReportEvent micFail, "Failure", "Test step has failed"



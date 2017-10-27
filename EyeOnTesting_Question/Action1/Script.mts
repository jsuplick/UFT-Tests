'Created 13 July 2017 author Jean Suplick
'Stored in GitHub repo UFT-Tests
'
'Browser("EyeOnTesting - Orasi Software").Page("EyeOnTesting - Orasi Software").WebElement("Ask a question").Click
Browser("EyeOnTesting - Orasi Software").InsightObject("InsightObject").Click
Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("title").Set "How do I ...." @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("title")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("body").Set "How do I ask a question?" @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("body")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("WebEdit").Set "Enter topics..." @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf11.xml_;_
Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebElement("WebElement").Click @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebElement("WebElement")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("WebEdit").Set "question" @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").Frame("Frame").WebCheckBox("recaptcha-anchor").Set "ON" @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").Frame("Frame").WebCheckBox("recaptcha-anchor")_;_script infofile_;_ZIP::ssf14.xml_;_
Reporter.ReportEvent micPass, "Captcha", "Captcha worked" @@ hightlight id_;_Browser("EyeOnTesting - Orasi Software").Page("Ask a Question - Orasi").WebElement("WebElement 2")_;_script infofile_;_ZIP::ssf13.xml_;_
Browser("EyeOnTesting - Orasi Software").CloseAllTabs 


 @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf9.xml_;_

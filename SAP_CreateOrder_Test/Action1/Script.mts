'Sample SAP test
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").Resize 129,23
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SAPGuiOKCode("OKCode").Set "VA11" @@ hightlight id_;_21_;_script infofile_;_ZIP::ssf1.xml_;_
SAPGuiSession("Session").SAPGuiWindow("SAP Easy Access").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf1.xml_;_

'Create Inquiry
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Initial").SAPGuiEdit("Inquiry Type").Set DataTable("Inquiry_Type", dtLocalSheet) @@ hightlight id_;_30_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Initial").SAPGuiEdit("Sales Organization").Set DataTable("Sales_Org", dtLocalSheet) @@ hightlight id_;_34_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Initial").SAPGuiEdit("Distribution Channel").Set DataTable("Distribution_Channel", dtLocalSheet) @@ hightlight id_;_35_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Initial").SAPGuiEdit("Division").Set DataTable("Division_Num", dtLocalSheet) @@ hightlight id_;_31_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Initial").SAPGuiEdit("Division").SetFocus @@ hightlight id_;_31_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Initial").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf2.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiEdit("PO Number").Set DataTable("PO_Num", dtLocalSheet) @@ hightlight id_;_42_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiEdit("PO date").Set DataTable("PO_Date", dtLocalSheet) @@ hightlight id_;_36_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiEdit("Sold-to party").Set "ORASI_CUS" @@ hightlight id_;_39_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiEdit("Ship-to party").Set "ORASI_CUS" @@ hightlight id_;_40_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiEdit("Valid from").Set DataTable("Valid_From", dtLocalSheet) @@ hightlight id_;_48_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiEdit("Valid to").Set DataTable("Valid_To", dtLocalSheet) @@ hightlight id_;_49_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiEdit("Valid to").SetFocus @@ hightlight id_;_49_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiButton("Save   (Ctrl+S)").Click @@ hightlight id_;_6_;_script infofile_;_ZIP::ssf3.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf4.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiStatusBar("StatusBar").Check CheckPoint("StatusBar") @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf5.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiStatusBar("StatusBar").Output CheckPoint("StatusBar_2") @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf6.xml_;_
wait 4

'Create Quotation
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiOKCode("OKCode").Set "/nva21" @@ hightlight id_;_21_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Inquiry: Overview").SAPGuiButton("Enter").Click @@ hightlight id_;_4_;_script infofile_;_ZIP::ssf7.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Initial").SAPGuiEdit("Quotation Type").Set "QT" @@ hightlight id_;_30_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Initial").SAPGuiEdit("Sales Organization").SetFocus @@ hightlight id_;_34_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Initial").SAPGuiButton("Create with Reference").Click @@ hightlight id_;_26_;_script infofile_;_ZIP::ssf8.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create with Reference").SAPGuiEdit("Inquiry").Set DataTable("InquiryNumber", dtGlobalSheet) @@ hightlight id_;_12_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create with Reference").SAPGuiButton("Copy").Click @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf9.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiEdit("PO Number").Set DataTable("PO_Num", dtLocalSheet) @@ hightlight id_;_43_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiEdit("PO date").Set DataTable("PO_Date", dtLocalSheet) @@ hightlight id_;_37_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiEdit("Valid from").Set DataTable("Valid_From", dtLocalSheet) @@ hightlight id_;_49_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiEdit("Valid to").Set DataTable("Valid_From", dtLocalSheet) @@ hightlight id_;_50_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiTable("All items").SetCellData 1,"Item","10" @@ hightlight id_;_66_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiTable("All items").SetCellData 1,"Material","1627" @@ hightlight id_;_66_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiTable("All items").SetCellData 1,"Order Quantity","20" @@ hightlight id_;_66_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiTable("All items").SetCellData 1,"SU","pc" @@ hightlight id_;_66_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiTable("All items").SetCellData 1,"#6","Orasi Test Material" @@ hightlight id_;_66_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiTable("All items").SelectCell 1,"#6" @@ hightlight id_;_66_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiButton("Save   (Ctrl+S)").Click @@ hightlight id_;_6_;_script infofile_;_ZIP::ssf10.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf11.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiStatusBar("StatusBar").Check CheckPoint("StatusBar_3") @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf12.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiStatusBar("StatusBar").Output CheckPoint("StatusBar_4") @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf13.xml_;_

'Create Sales Order
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SAPGuiOKCode("OKCode").Set "/nva01" @@ hightlight id_;_21_;_script infofile_;_ZIP::ssf16.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Quotation: Overview").SendKey ENTER @@ hightlight id_;_0_;_script infofile_;_ZIP::ssf16.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Order: Initial").SAPGuiEdit("Order Type").Set "OR" @@ hightlight id_;_30_;_script infofile_;_ZIP::ssf17.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Sales Order: Initial").SAPGuiButton("Create with Reference").Click @@ hightlight id_;_26_;_script infofile_;_ZIP::ssf19.xml_;_


SAPGuiSession("Session").SAPGuiWindow("Create with Reference_2").SAPGuiEdit("Quot.").Set DataTable("QuotationNumber", dtGlobalSheet) @@ hightlight id_;_12_;_script infofile_;_ZIP::ssf21.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create with Reference_2").SAPGuiButton("Copy").Click @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf21.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("PO Number").Set DataTable("PO_Num", dtLocalSheet) @@ hightlight id_;_43_;_script infofile_;_ZIP::ssf22.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("PO date").Set DataTable("PO_Date", dtLocalSheet) @@ hightlight id_;_37_;_script infofile_;_ZIP::ssf22.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiEdit("PO date").SetFocus @@ hightlight id_;_37_;_script infofile_;_ZIP::ssf22.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiButton("Save   (Ctrl+S)").Click @@ hightlight id_;_6_;_script infofile_;_ZIP::ssf22.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Sync @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf23.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Check CheckPoint("StatusBar_5") @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf24.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Output CheckPoint("StatusBar_6") @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf25.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiStatusBar("StatusBar").Output CheckPoint("StatusBar_7")

'Logout of SAP
SAPGuiSession("Session").SAPGuiWindow("Create Standard Order:").SAPGuiMenubar("mbar").Select "System;Log off" @@ hightlight id_;_1_;_script infofile_;_ZIP::ssf26.xml_;_
SAPGuiSession("Session").SAPGuiWindow("Log Off").SAPGuiButton("Yes").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf27.xml_;_

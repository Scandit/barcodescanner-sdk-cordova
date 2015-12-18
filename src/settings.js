var Rect = cordova.require("com.mirasense.scanditsdk.plugin.Rect");
var Point = cordova.require("com.mirasense.scanditsdk.plugin.Point");
var SymbologySettings = cordova.require("com.mirasense.scanditsdk.plugin.SymbologySettings");
var Barcode = cordova.require("com.mirasense.scanditsdk.plugin.Barcode");


function ScanSettings() {
    this.symbologies = {};
    
    this.symbologies[Barcode.Symbology.EAN13] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.EAN13].activeSymbolCounts = [12];
    
    this.symbologies[Barcode.Symbology.EAN8] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.EAN8].activeSymbolCounts = [8];
    
    this.symbologies[Barcode.Symbology.UPC12] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.UPC12].activeSymbolCounts = [12];
    
    this.symbologies[Barcode.Symbology.UPCE] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.UPCE].activeSymbolCounts = [6];
    
    this.symbologies[Barcode.Symbology.CODE11] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.CODE11].activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    												 				 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
    
    this.symbologies[Barcode.Symbology.CODE128] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.CODE128].activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    this.symbologies[Barcode.Symbology.CODE39] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.CODE39].activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    this.symbologies[Barcode.Symbology.CODE93] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.CODE93].activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    
    this.symbologies[Barcode.Symbology.ITF] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.ITF].activeSymbolCounts = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    
    this.symbologies[Barcode.Symbology.QR] = new SymbologySettings();
    
    this.symbologies[Barcode.Symbology.DATA_MATRIX] = new SymbologySettings();
    
    this.symbologies[Barcode.Symbology.PDF417] = new SymbologySettings();
    
    this.symbologies[Barcode.Symbology.MSI_PLESSEY] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.MSI_PLESSEY].activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    this.symbologies[Barcode.Symbology.GS1_DATABAR] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.GS1_DATABAR].activeSymbolCounts = [14];
    
    this.symbologies[Barcode.Symbology.GS1_DATABAR_LIMITED] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.GS1_DATABAR_LIMITED].activeSymbolCounts = [14];
    
    this.symbologies[Barcode.Symbology.GS1_DATABAR_EXPANDED] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.GS1_DATABAR_EXPANDED].activeSymbolCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    																			   21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    																			   41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    																			   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
    
    this.symbologies[Barcode.Symbology.CODABAR] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.CODABAR].activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
    this.symbologies[Barcode.Symbology.AZTEC] = new SymbologySettings();
    
    this.symbologies[Barcode.Symbology.MAXICODE] = new SymbologySettings();
    
    this.symbologies[Barcode.Symbology.FIVE_DIGIT_ADD_ON] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.FIVE_DIGIT_ADD_ON].activeSymbolCounts = [5];
    
    this.symbologies[Barcode.Symbology.TWO_DIGIT_ADD_ON] = new SymbologySettings();
    this.symbologies[Barcode.Symbology.TWO_DIGIT_ADD_ON].activeSymbolCounts = [2];
    
    this.workingRange = ScanSettings.WorkingRange.STANDARD;
    
    this.codeCachingDuration = -1;
    this.codeDuplicateFilter = 500;
    
    this.highDensityModeEnabled = false;
    
    this.activeScanningAreaPortrait = new Rect(0, 0, 1, 1);
    this.activeScanningAreaLandscape = new Rect(0, 0, 1, 1);
    
    this.cameraFacingPreference = ScanSettings.CameraFacing.BACK;
    
    this.scanningHotSpot = new Point(0.5, 0.5);
    
    this.relativeZoom = 0.0;
    
    this.maxNumberOfCodesPerFrame = 1;
}

ScanSettings.CameraFacing = {
	BACK: "back",
	FRONT: "front"
}

ScanSettings.WorkingRange = {
	STANDARD: "standard",
	LONG: "long"
}

ScanSettings.prototype.getSymbologySettings = function(symbology) {
	return this.symbologies[symbology];
}

ScanSettings.prototype.setSymbologyEnabled = function(symbology, enabled) {
	var symbologySettings = this.getSymbologySettings(symbology);
	symbologySettings.enabled = enabled;
	this.symbologies[symbology] = symbologySettings;
}

module.exports = ScanSettings;
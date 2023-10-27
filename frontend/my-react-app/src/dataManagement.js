import * as XLSX from 'xlsx';

const dataStore = {

  workbookXLSX: null,
  workbookCSV: null,
  workbookJSON: null,
  workbookXBRL: null,

  dataTaxonomyXLSX: null,
  dataTaxonomyJSON: null,
  dataTaxonomyCSV: null,
  dataTaxonomyXBRL: null,

  initializeDataTaxonomyXLSX: ()=>{
    dataStore.dataTaxonomyXLSX = dataStore.workbookXLSX.SheetNames
  },
  initializeDataTaxonomyCSV: ()=>{},
  initializeDataTaxonomyJSON: ()=>{},
  initializeDataTaxonomyXBRL: ()=>{},

  //from an edit to the taxonomy, make another for an addition and or deletion
  updateDataTaxonomyXLSX: (index, titleChange) => {
    if (dataStore.dataTaxonomyXLSX[index]) {
      // Update the title in dataTaxonomyXLSX
      dataStore.dataTaxonomyXLSX[index] = titleChange;

      // Also update the title in the Sheets object of the workbook
      if (dataStore.workbookXLSX && dataStore.workbookXLSX.SheetNames[index]) {
        const oldTitle = dataStore.workbookXLSX.SheetNames[index];
        dataStore.workbookXLSX.SheetNames[index] = titleChange;
        dataStore.workbookXLSX.Sheets[titleChange] = dataStore.workbookXLSX.Sheets[oldTitle];
        delete dataStore.workbookXLSX.Sheets[oldTitle];
      }
    }
  },
  updateDataTaxonomyCSV: ()=>{},
  updateDataTaxonomyJSON: ()=>{},
  updateDataTaxonomyXBRL: ()=>{},

  // | Delete
  clearXLSXworkbook: ()=>{
    dataStore.workbookXLSX = null
    dataStore.dataTaxonomyXLSX = null
  },
  clearJSONworkbook: ()=>{},
  clearCSVworkbook: ()=>{},
  clearXBRLworkbook: ()=>{},


  //change to by type | Create
  addWorkbook: (workbook) => {
     dataStore.workbookXLSX = workbook;
   },
  addWorkbookJSON: ()=>{},
  addWorkbookCSV: ()=>{},
  addWorkbookXBRL: ()=>{},

  //change to by type | Update
  updateSheetData: (sheetName, sheetData, header) => {  //update sheet data on a cell edit for a sheet
    if (dataStore.workbookXLSX) {
      // Find the sheet index by name
      //const sheetIndex = dataStore.workbook.SheetNames.indexOf(sheetName);
        // Update the sheet's data
        const sheetWithHeader = [header, ...sheetData];
        var store  = XLSX.utils.aoa_to_sheet(sheetWithHeader);
        dataStore.workbookXLSX.Sheets[sheetName] = store

    }
  }, //change to XSLX
  updateSheetDataCSV: ()=>{},
  updateSheetDataJSON: ()=>{},
  updateSheetDataXBRL: ()=>{},


  versionUpdate: ()=>{
    //insert this above ervey mutation of data
    //append to list in db
    //return id list
  },
  pullVersion: ()=>{
    //pull version dependnet on ID into dataStore object
  },

  transformToCSV: ()=>{},
  transformToJSON: ()=>{},
  transformToXLSX: ()=>{},
  transformToXBRL: ()=>{},

  transformToHTML: ()=>{},
  transformToDocX: ()=>{},
  transformToPDF: ()=>{},
  transformToAdobeInDesign: ()=>{},
  tranformToRDF: ()=>{},

  htmlWorkbook: null,
  dockXworkbook: null,
  pdfWorkbook: null,
  adobeInDesignWorkbook: null,
  rdfWorkbook: null,

  addTransformation: ()=>{},
  xWorkbook: null, //PROLOG, GSQL, SQL.

  overLaidModel: null,
  changeOverLaidModel: ()=>{},

  tooltipItems: null,
  changeToolTipItems: ()=>{},

  //pipeline
  deployedRenderings: null,
  changeDeployedRenderings: ()=>{},
  verifications: null,
  changeDeployedVerifications: ()=>{},
  xBRL: null,
  changeXBRL: ()=>{},


  user: null, // Property to store user information
  project: null,
  projectList: null,
  file: null,
  fileList: null,
  organization: null,
  organizationList: null,

  //changeing project/file functions


};

export default dataStore;

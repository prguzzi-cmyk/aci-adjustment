import StructuredData from './structured-data';

const structuredDataObj = new StructuredData();

const baseData = structuredDataObj.getBase();
const ACIGeneralData = structuredDataObj.getACIGeneralData();
const ACIAddress = structuredDataObj.getACIAddress();
const ACIReview = structuredDataObj.getACIReview();
const ACIGeo = structuredDataObj.getACIGeo();
const ACIDepartment = structuredDataObj.getACIDepartment();

export const HomePageData = () => {
	return {
		...baseData,
		...ACIGeneralData,
		...ACIAddress,
		...ACIReview,
		...ACIGeo,
		...ACIDepartment,
	};
};

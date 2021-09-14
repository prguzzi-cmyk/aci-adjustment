import StructuredData from './structured-data';

const structuredDataObj = new StructuredData();

const baseData = structuredDataObj.getBase();
const ACIGeneralData = structuredDataObj.getACIGeneralData();
const ACIAddress = structuredDataObj.getACIAddress();
const ACIGeo = structuredDataObj.getACIGeo();

export const HomePageData = () => {
	return {
		...baseData,
		...ACIGeneralData,
		...ACIAddress,
		...ACIGeo,
	};
};

export const CommunityPageData = () => {
	return {
		...baseData,
		...ACIGeneralData,
		...ACIAddress,
		...ACIGeo,
	};
};

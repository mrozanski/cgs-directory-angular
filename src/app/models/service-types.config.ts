interface ServiceTypesConfigInterface {
    pathById: {
        [key: string]: string;
    },
    categoryById: {
        [key: string]: string;
    }
}
export const serviceTypesConfig: ServiceTypesConfigInterface = {
  pathById : {
    '1': 'adult-day-care',
    '2': 'assisted-living',
    '3': 'home-care',
    '4': 'affordable-housing',
    '5': 'nursing-care',
    '6': 'independent-living',
    '7': 'hospices',
  },
  categoryById : {
    '1': '2',
    '2': '1',
    '3': '2',
    '4': '1',
    '5': '1',
    '6': '1',
    '7': '2',
  }
}


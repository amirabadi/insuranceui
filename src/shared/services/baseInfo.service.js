import Ajax from '../../utilis/Ajax'

const personService = {

    dropdownRecord: async (dataIn) => {
        const response = await Ajax.newPost({
            url: 'getDropDownBaseinfo',
            data: dataIn
        })
        return response;
    },
    addRecord: async (dataIn) => {
        const response = await Ajax.newPost({
            url: 'saveBaseInformation',
            data: dataIn
        })
        return response;
    },
    deleteRecord: async (dataIn) => {
        const response = await Ajax.newPost({
            url: 'deleteBaseInformation',
            data: dataIn
        })
        return response;
    },
    editRecord: async (dataIn) => {
        const response = await Ajax.newPost({
            url: 'editBaseInformation',
            data: dataIn
        })
        return response;
    },
    pagable: async (dataIn) => {
        const response = await Ajax.getAllPage({
            url: 'getBaseInformationPage',
            data: dataIn
        })
        return response;
    }
}
export default personService;
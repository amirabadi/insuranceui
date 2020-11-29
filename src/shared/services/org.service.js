import Ajax from '../../utilis/Ajax'

const orgService = {

    dropdownRecord: async (dataIn) => {
        const response = await Ajax.newPost({
            url: 'getInfoOrg'
        })
        return response;
    }
}
export default orgService;
let result = require('./groupInfo.json');

const getGroupInfo = async (id) => {
    let res = result;
    // let res = await fetch('')

    // try {
    //     if (!res.ok) {
    //         let message = await res.text();
    //         throw new Error(message);
    //     }
    // } catch (err) {
    //     alert(err.message);
    // }

    return res;
}

export { getGroupInfo };
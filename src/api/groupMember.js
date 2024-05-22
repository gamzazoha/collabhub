let result = require('./groupMember.json');

const getGroupMembers = async (id) => {
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

export { getGroupMembers };
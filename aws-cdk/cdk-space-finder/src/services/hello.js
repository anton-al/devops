

exports.main = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `I will read from ${process.env.TABLE_NAME}!`})
    };
}
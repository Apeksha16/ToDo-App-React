export const callApi = async (url, req) => {
    try {
        const apiCall = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req),
        });
        const response = await apiCall.json();
        return { status : true, data: response };
    }
    catch (err) {
        console.log(err);
        return { status : false, data: err };
    }
};
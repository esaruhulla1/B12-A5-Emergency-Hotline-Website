function getById(id) {
    const element = document.getElementById(id)
    return element;
}

getById('card-section').addEventListener('click', function (e) {

    // hert count incrise function
    if (e.target.className.includes('heart-icon')) {
        const heartBtn = e.target;
        let oldHertCount = Number(getById('hert-count-icon-div').innerText);
        getById('hert-count-icon-div').innerText = oldHertCount + 1;
    }

    // call btn function
    if (e.target.className.includes("call-btn")) {
        // coins function

        const availabeCoin = Number(getById('availavle-coin').innerText)
        if (availabeCoin >= 20) {
            getById('availavle-coin').innerText = availabeCoin - 20;
        } else {
            alert("❌ আপনার পর্জাপ্ত কয়েন নেই কল করার করতে কমপক্ষে 20 কয়েন লাগবে");
            return;
        }
        // allert function
        const callBtn = e.target.closest("button");
        const serviceName = callBtn.parentNode.parentNode.children[1].children[1].innerText;
        const serviceNummber = callBtn.parentNode.parentNode.children[2].children[0].innerText;
        alert("📞 calling " + serviceName + " " + serviceNummber + "...")

        // History function
        const serviceHeading = callBtn.parentNode.parentNode.children[1].children[0].innerText;
        const nowTime = new Date().toLocaleTimeString()
        const historyContainer = getById('history-container')
        const newElement = document.createElement('div')
        newElement.innerHTML = `
                    <div class="flex items-center justify-between  bg-[#fafafa] rounded-md  md:p-2 lg:p-5 mb-2">
                        <div>
                            <h2 class="text-sm lg:text-lg">${serviceHeading}</h2>
                            <p class="text-sm lg:text-[15px] mt-1 lg:mt-2">${serviceNummber}</p>
                        </div>
                        <div>
                            <p class="sm:text-sm ">${nowTime}</p>
                        </div>
                    </div>
        `
        historyContainer.append(newElement);
    }

    // copy btn function
    if (e.target.className.includes('copy-btn')) {
        const copyBtn = e.target;
        const callBtn = e.target.closest("button");
        let oldCopyCount = Number(getById('copy-count-icon-div').innerText);
        getById('copy-count-icon-div').innerText = oldCopyCount + 1;
        const serviceNummber = callBtn.parentNode.parentNode.children[2].children[0].innerText;
        alert("নম্বর কপি হয়েছে: " + serviceNummber);
        navigator.clipboard.writeText(serviceNummber)
    }
})


// clear btn function
getById('clear-btn').addEventListener('click', function () {
    let historyContainer = getById('history-container')
    historyContainer.innerHTML = ""
})
(()=>{

    // results indexed by tab
    const results = {
        0: '',
        1: '',
        2: '',
    };

    // tabs
    let activeTab;
    const tabs = document.querySelectorAll('.tabs-content .tab');
    const tabControllers = document.querySelectorAll('.tabs-controller div');
    tabControllers.forEach((tabController, i)=> tabController.addEventListener('click', ()=>changeTab(i)));

    const changeTab = (tabIndex)=>{
        activeTab = tabIndex;
        tabs.forEach((tab)=>tab.style.display = 'none');
        tabs[tabIndex].style.display = 'block';

        tabControllers.forEach((tabController, i)=> tabController.classList.remove('active'));
        tabControllers[tabIndex].classList.add('active');
    };


    // Datepicker
    const genOption = (text, value)=> {
        const option = document.createElement('option');
        option.value = value || text;
        option.innerHTML = text;
        return option;
    };

    Date.prototype.getMonthForMortals = function(){ return this.getMonth() + 1; };
    const date = new Date();

    // year
    const yearDropdown = document.querySelector('#year');
    yearDropdown.addEventListener('change', ()=>updateDropdowns());
    const actualYear = date.getFullYear();
    const initialYear = actualYear - 10;
    const finalYear = actualYear + 10;
    for (let i = initialYear; i <= finalYear; i++) {
        yearDropdown.appendChild(genOption(i));
    }

    // month
    const monthDropdown = document.querySelector('#month');
    monthDropdown.addEventListener('change', ()=>updateDropdowns());
    for (let i = 1; i <= 12; i++) {
        monthDropdown.appendChild(genOption(i));
    }

    // day
    let dayDropdownLastSelected = date.getDate();
    const dayDropdown = document.querySelector('#day');
    dayDropdown.addEventListener('change', ()=>{
        dayDropdownLastSelected = dayDropdown.value;
        results[1] = `${dayDropdown.value}/${monthDropdown.value}/${yearDropdown.value}`;
    });
    const genDayDropdownOptions = (finalDay)=> {
        dayDropdown.innerHTML = '';
        for (let i = 1; i <= finalDay; i++) {
            dayDropdown.appendChild(genOption(i));
        }
        dayDropdown.value = dayDropdownLastSelected;
    };

    const getLastDayOfTheMonth = (year, month)=> {
        const d = new Date(`${year}-${month}-01`);
        d.setMonth(d.getMonth() + 1);
        d.setDate(0);
        return d.getDate();
    };

    const updateDropdowns = ()=> {
        genDayDropdownOptions(getLastDayOfTheMonth(yearDropdown.value, monthDropdown.value));
        results[1] = `${dayDropdown.value}/${monthDropdown.value}/${yearDropdown.value}`;
    };

    // Day of the week
    const dayOfTheWeek = document.querySelectorAll('[name=dow]');
    const resetWeekDay = ()=> {
        results[0] = '';
        dayOfTheWeek.forEach((dow)=> dow.checked = false);
    };
    const checkWeekDay = (val)=> {
        dayOfTheWeek.forEach((dow)=> {
            if (dow.value === val) {
                dow.checked = true;
                results[0] += `${dow.value}, `;
            }
        });
    };

    // User Input
    const input = document.querySelector('#input');
    const populateTabs = (val)=>{
        results[2] = val;
        val = val.toUpperCase().match(/(MON|TUE|WED|THU|FRI|SAT|SUN)/g);
        if (val instanceof Array && val.length > 0) {
            resetWeekDay();
            val.forEach((v)=>checkWeekDay(v));
        }
    };
    input.addEventListener('keyup', (evt)=>populateTabs(evt.target.value));

    // Result
    const result = document.querySelector('#result');
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', (evt)=> {
        console.log(results);
        evt.preventDefault();
        result.value = results[activeTab];
    });

    // initialize
    genDayDropdownOptions(getLastDayOfTheMonth(actualYear, date.getMonthForMortals()));
    changeTab(2);

    dayDropdown.value = date.getDate();
    monthDropdown.value = date.getMonth() + 1;
    yearDropdown.value = date.getFullYear();
})();

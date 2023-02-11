import { expensebe } from "../../environment";

export async function getExpenses(filteredMonth, filteredYear, filteredCategory, email){
    let url = expensebe + "expenses?year=" + filteredYear;
    if (filteredMonth !== "13"){
        url += "&month=" + filteredMonth;
    }
    if (filteredCategory && filteredCategory !== "All") {
        url += "&category=" + filteredCategory;
    }
    if(email){
        url += "&userName=" + email;
    }
    const expenses = await fetch(url);
    return await expenses.json();
    
}

// export async function getExpenses(){
//     const expenses = await fetch("http://localhost:8080/expenses");
//     return await expenses.json();
// }

//if (data) {
    // data.forEach(item => {
    //     const spilltedDate = item["date"].split('T')[0].split('-');
    //     const date = new Date(spilltedDate[0], spilltedDate[1] - 1, spilltedDate[2], 0, 0, 0);    
    //     item["date"] = date;
    //     expenses.push(item);
    // });
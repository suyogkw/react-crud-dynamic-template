export const employeeData = [
    {
        employee_id:1,
        last_name:'donut',
        first_name:'peter',
        salary:100
    },
    {
        employee_id:2,
        last_name:'doe',
        first_name:'john',
        salary:600
    },
    {
        employee_id:3,
        last_name:'kerry',
        first_name:'amanda',
        salary:500
    }
]

export const entityDetails = [
    {
        id:"Employees",
        idColumn:"employee_id",
        apis:{
            getAll:"/employees/getall",
            onInsert:"/employees/insert",
            onEdit:"/employees/edit",
            onDelete:"/employees/delete"
        },
        columns:[
            {
                id:"employee_id",
                name:"employee id",
                valueMode:"auto",
                onEdit:"disabled",
            },
            {
                id:"last_name",
                name:"last name",
                valueMode:"form",
                validator:"alphanumeric",
                type:"text",
                maxlength:50,
                onEdit:"hidden"
            }, 
            {
                id:"first_name",
                name:"first name",
                valueMode:"form",
                validator:"numeric",
                type:"select",
                options:["option 1","option 2","option 3"]
            } 
        ]
    }
]
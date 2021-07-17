import {ref} from 'vue';
export function useTableData() {
    const TableData = ref<ITableData[]>(
       // [...Array(5).keys()].map(() => ({
            //name: "Елена Петровская",
           // email: "helena@mail.com",
            //status: "Инвестор со стажем",
           // inn: "123456789",
           // country: "Резидентство РФ"
       // }))
       [
        {
            name: "Елена Петровская",
            email: "helena@mail.com",
            status: "Активный",
            statusColor: 'green',
            inn: "123456789",
            country: "Резидентство РФ"
        },
        {
            name: "Петр Еленскович",
            email: "petr@mail.com",
            status: "Отключен",
            statusColor: 'red',
            inn: "987654321",
            country: "Резидентство РФ"
        },
        {
            name: "Мария Ивановна",
            email: "mari@mail.com",
            status: "Подача заявки",
            statusColor: 'yellow',
            inn: "546879213",
            country: "Резидентство РФ"
        }

       ]

    )

    return {TableData};
}
const dataForUtilization = [
    {
        id: 1,
        name: 'CPU',
        read: [10, 8, 9, 11, 10, 8, 9, 10, 11, 10, 12, 11, 10, 11, 10, 9, 8, 9, 11, 10, 9, 8, 10, 11, 10],
        write:[],
        input:[],
        output:[]
    },
    {
        id: 2,
        name: 'I/O',
        read: [140, 180, 129, 169, 115, 170, 140, 180, 129, 169, 115, 170, 140, 180, 129, 169, 115, 170, 140, 180, 129, 169, 115, 170, 140, 180, 129, 169],
        write: [100, 140, 130, 145, 150, 148, 100, 140, 130, 145, 150, 148, 100, 140, 130, 145, 150, 148, 100, 140, 130, 145, 150, 148, 100, 140, 130, 145],
        input:[],
        output:[]
    },
    {
        id: 3,
        name: 'DISK',
        read:[],
        write:[],
        input: [24, 28, 32, 25, 27, 25, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32, 25, 25, 24, 28, 32, 25, 27, 25, 24, 28, 32,],
        output: [53, 49, 52, 50, 48, 51, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52, 50, 51, 53, 49, 52, 50, 48, 51, 53, 49, 52,]
    }
]

module.exports = dataForUtilization;
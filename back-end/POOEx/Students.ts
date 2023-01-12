export default class Student {
    private _matricula: string;
    private _nome: string;
    private _provas: number[] = Array();
    private _trabalhos: number[] = Array()

    constructor(
        matricula: string,
        nome: string,
        provas: number[],
        trabalhos: number[],
    ) {
        this._matricula = matricula;
        this._nome = nome;
        this.provas = provas;
        this.trabalhos = trabalhos
    }

    get matricula(): string {
        return this._matricula;
    }

    set matricula(valor: string) {
        this._matricula = valor;
    }

    get name(): string {
        return this._nome;
    }

    set name(value: string) {
        if (value.length < 3) {
            throw new Error('Nome pequeno demais');
        }

        this._nome = value;
    }

    get provas(): number[] {
        return this._provas;
    }

    set provas(value: number[]) {
        if (value.length < 4) { throw new Error('O estudante deve apresentar no mínimo 4 provas') }

        this._provas = value;
    }

    get trabalhos(): number[] {
        return this._trabalhos;
    }

    set trabalhos(value: number[]) {
        if (value.length < 2) { throw new Error('O estudante deve apresentar no mínimo 2 trabalhos') }

        this._trabalhos = value;
    }

    sumGrades(): number {
        return [...this.provas, ...this.trabalhos]
        .reduce((prev, grade) => {
            grade += prev;
            return grade;
        }, 0)
    }

    averageGrades(): number {
        const allGrades = this.provas.length + this.trabalhos.length;
        const sumgradeRecude = [...this.provas, ...this.trabalhos]
        .reduce((prev, grade) => {
            grade += prev;
            return grade;
        }, 0)
        return Math.round(sumgradeRecude/allGrades)
    }
}
const student1 = new Student('235', 'Larissa Manoela', [9, 8, 3, 10], [3, 5])
console.log(student1)
console.log('SOma das notas', student1.sumGrades())
console.log('Média das notas', student1.averageGrades())
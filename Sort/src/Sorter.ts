export default interface Sorter <T> {
    sort( values: T[] ,comparator?: ( o1: T, o2: T ) => number ): void
}
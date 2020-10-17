import { PrimaryGeneratedColumn, Entity, Column } from "../../../../src";
import { Option } from "../Option.enum";

@Entity("Foo")
export class Foo {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: Option,
    })
    option: Option;
}

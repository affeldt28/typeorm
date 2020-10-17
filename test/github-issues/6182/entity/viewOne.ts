import { ViewEntity, ViewColumn, Connection } from "../../../../src";
import { Option } from "../Option.enum";

@ViewEntity("view_One", {
    expression: (connection: Connection) =>
        connection
            .createQueryBuilder()
            .select("f.id", "id")
            .from("Foo", "f")
            .where("f.option = :option", { option: Option.ONE }),
})
export class ViewOne {
    @ViewColumn()
    id: string;

    @ViewColumn()
    option: Option;
}

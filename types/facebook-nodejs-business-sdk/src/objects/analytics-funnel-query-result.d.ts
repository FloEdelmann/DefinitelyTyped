import { AbstractCrudObject } from "./../abstract-crud-object";
/**
 * AnalyticsFunnelQueryResult
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AnalyticsFunnelQueryResult extends AbstractCrudObject {
    static get Fields(): Readonly<{
        query_id: "query_id";
        status: "status";
    }>;
}

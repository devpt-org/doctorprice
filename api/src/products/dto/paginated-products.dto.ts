import { ApiExtraModels, ApiOkResponse, ApiProperty, ApiResponse, getSchemaPath } from "@nestjs/swagger";
import { applyDecorators, Type } from "@nestjs/common";
import { IPaginationLinks, IPaginationMeta, Pagination } from "nestjs-typeorm-paginate";

class PaginationMeta implements IPaginationMeta {
    @ApiProperty({ type: Number })
    public itemCount: number;

    @ApiProperty({ type: Number })
    public totalItems?: number;

    @ApiProperty({ type: Number })
    public itemsPerPage: number;

    @ApiProperty({ type: Number })
    public totalPages?: number;

    @ApiProperty({ type: Number })
    public currentPage: number;
}

class PaginationLinks implements IPaginationLinks {
    @ApiProperty({ type: String })
    public first?: string;

    @ApiProperty({ type: String })
    public previous?: string;

    @ApiProperty({ type: String })
    public next?: string;

    @ApiProperty({ type: String })
    public last?: string;
}



export class PaginatedDto<TData> {
    @ApiProperty()
    meta: PaginationMeta;

    @ApiProperty()
    links?: PaginationLinks;

    @ApiProperty()
    items: TData[];
}

export const ApiPaginatedResponse = <TModel extends Type<any>>(
    model: TModel,
) => {
    return applyDecorators(
        ApiResponse({
            schema: {
                title: `PaginatedResponseOf${model.name}`,
                allOf: [
                    { $ref: getSchemaPath(PaginatedDto) },
                    {
                        properties: {
                            items: {
                                type: 'array',
                                items: { $ref: getSchemaPath(model) },
                            },
                        },
                    },
                ],
            },
        }),
        ApiExtraModels(PaginatedDto, model)
    );
};
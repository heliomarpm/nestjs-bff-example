import { HttpException } from "@nestjs/common";
import { AxiosError } from "axios";
import { ResultViewModel } from "src/shared/models/interfaces/result-view.model";

export const errorResponseHelper = (error: AxiosError) => {
    const errorData = error?.response?.data;

    const resultError: ResultViewModel<null> = {
        data: null,
        error: {
            status: error?.status,
            message: error?.message,
            dataError: !errorData ? error : errorData,
        }
    }

    throw new HttpException(resultError, error?.response?.status || 500);

}
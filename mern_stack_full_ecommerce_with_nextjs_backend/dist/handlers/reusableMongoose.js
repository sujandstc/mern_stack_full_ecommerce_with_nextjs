"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const reusableMongoose = ({ mongooseQuery, queryObject, searchFields, }) => {
    var _a, _b;
    let clonedQueryObject = lodash_1.default.cloneDeep(queryObject);
    delete clonedQueryObject.pagination_limit;
    delete clonedQueryObject.pagination_page;
    delete clonedQueryObject.search;
    delete clonedQueryObject.showCount;
    // Appending all query strings to mongooseQuery
    clonedQueryObject = JSON.stringify(clonedQueryObject);
    const stringiFiedData = clonedQueryObject.replace(/\b(gt|gte|lt|lte)\b/g, (match) => {
        return `$${match}`;
    });
    clonedQueryObject = JSON.parse(stringiFiedData);
    mongooseQuery = mongooseQuery.find(clonedQueryObject);
    // Working with search
    if (queryObject.search) {
        const searchArray = [];
        searchFields.map((el) => searchArray.push({
            [el]: { $regex: new RegExp(queryObject.search, "i") },
        }));
        mongooseQuery = mongooseQuery.find({ $or: searchArray });
    }
    let pagination_limit;
    let pagination_page;
    // Working on limits
    if (queryObject.pagination_page) {
        if (queryObject.pagination_page) {
            if (!queryObject.pagination_limit)
                throw "Pagination limit and page, both required!";
        }
        if (queryObject.pagination_limit) {
            if (!queryObject.pagination_page)
                throw "Pagination limit and page, both required!";
        }
        // Limiting too much data...
        if (queryObject.pagination_limit > 250)
            queryObject.pagination_limit = 250;
        mongooseQuery = mongooseQuery
            .skip(queryObject.pagination_page > 1
            ? (queryObject.pagination_page - 1) * queryObject.pagination_limit
            : 0)
            .limit(queryObject.pagination_limit);
        pagination_limit = parseInt((_a = queryObject.pagination_limit) !== null && _a !== void 0 ? _a : 0);
        pagination_page = parseInt((_b = queryObject.pagination_page) !== null && _b !== void 0 ? _b : 0);
    }
    else {
        mongooseQuery = mongooseQuery.limit(25);
        pagination_limit = 25;
        pagination_page = 1;
    }
    return {
        query: mongooseQuery,
        conditions: mongooseQuery._conditions,
        pagination_limit,
        pagination_page,
    };
};
exports.default = reusableMongoose;

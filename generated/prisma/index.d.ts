
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model IcarRoute
 * 
 */
export type IcarRoute = $Result.DefaultSelection<Prisma.$IcarRoutePayload>
/**
 * Model IcarStop
 * 
 */
export type IcarStop = $Result.DefaultSelection<Prisma.$IcarStopPayload>
/**
 * Model RouteStopWaypoint
 * 
 */
export type RouteStopWaypoint = $Result.DefaultSelection<Prisma.$RouteStopWaypointPayload>
/**
 * Model Icar
 * 
 */
export type Icar = $Result.DefaultSelection<Prisma.$IcarPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const IcarStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type IcarStatus = (typeof IcarStatus)[keyof typeof IcarStatus]


export const ScheduleSession: {
  SESSION_1: 'SESSION_1',
  SESSION_2: 'SESSION_2'
};

export type ScheduleSession = (typeof ScheduleSession)[keyof typeof ScheduleSession]


export const TicketStatus: {
  FINISHED: 'FINISHED',
  CANCELED: 'CANCELED',
  IN_QUEUE: 'IN_QUEUE'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]

}

export type IcarStatus = $Enums.IcarStatus

export const IcarStatus: typeof $Enums.IcarStatus

export type ScheduleSession = $Enums.ScheduleSession

export const ScheduleSession: typeof $Enums.ScheduleSession

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IcarRoutes
 * const icarRoutes = await prisma.icarRoute.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more IcarRoutes
   * const icarRoutes = await prisma.icarRoute.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.icarRoute`: Exposes CRUD operations for the **IcarRoute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IcarRoutes
    * const icarRoutes = await prisma.icarRoute.findMany()
    * ```
    */
  get icarRoute(): Prisma.IcarRouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.icarStop`: Exposes CRUD operations for the **IcarStop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IcarStops
    * const icarStops = await prisma.icarStop.findMany()
    * ```
    */
  get icarStop(): Prisma.IcarStopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeStopWaypoint`: Exposes CRUD operations for the **RouteStopWaypoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteStopWaypoints
    * const routeStopWaypoints = await prisma.routeStopWaypoint.findMany()
    * ```
    */
  get routeStopWaypoint(): Prisma.RouteStopWaypointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.icar`: Exposes CRUD operations for the **Icar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Icars
    * const icars = await prisma.icar.findMany()
    * ```
    */
  get icar(): Prisma.IcarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    IcarRoute: 'IcarRoute',
    IcarStop: 'IcarStop',
    RouteStopWaypoint: 'RouteStopWaypoint',
    Icar: 'Icar',
    Schedule: 'Schedule',
    User: 'User',
    Ticket: 'Ticket'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "icarRoute" | "icarStop" | "routeStopWaypoint" | "icar" | "schedule" | "user" | "ticket"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      IcarRoute: {
        payload: Prisma.$IcarRoutePayload<ExtArgs>
        fields: Prisma.IcarRouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IcarRouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IcarRouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload>
          }
          findFirst: {
            args: Prisma.IcarRouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IcarRouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload>
          }
          findMany: {
            args: Prisma.IcarRouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload>[]
          }
          create: {
            args: Prisma.IcarRouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload>
          }
          createMany: {
            args: Prisma.IcarRouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IcarRouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload>
          }
          update: {
            args: Prisma.IcarRouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload>
          }
          deleteMany: {
            args: Prisma.IcarRouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IcarRouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IcarRouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarRoutePayload>
          }
          aggregate: {
            args: Prisma.IcarRouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIcarRoute>
          }
          groupBy: {
            args: Prisma.IcarRouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<IcarRouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.IcarRouteCountArgs<ExtArgs>
            result: $Utils.Optional<IcarRouteCountAggregateOutputType> | number
          }
        }
      }
      IcarStop: {
        payload: Prisma.$IcarStopPayload<ExtArgs>
        fields: Prisma.IcarStopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IcarStopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IcarStopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload>
          }
          findFirst: {
            args: Prisma.IcarStopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IcarStopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload>
          }
          findMany: {
            args: Prisma.IcarStopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload>[]
          }
          create: {
            args: Prisma.IcarStopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload>
          }
          createMany: {
            args: Prisma.IcarStopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IcarStopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload>
          }
          update: {
            args: Prisma.IcarStopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload>
          }
          deleteMany: {
            args: Prisma.IcarStopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IcarStopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IcarStopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarStopPayload>
          }
          aggregate: {
            args: Prisma.IcarStopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIcarStop>
          }
          groupBy: {
            args: Prisma.IcarStopGroupByArgs<ExtArgs>
            result: $Utils.Optional<IcarStopGroupByOutputType>[]
          }
          count: {
            args: Prisma.IcarStopCountArgs<ExtArgs>
            result: $Utils.Optional<IcarStopCountAggregateOutputType> | number
          }
        }
      }
      RouteStopWaypoint: {
        payload: Prisma.$RouteStopWaypointPayload<ExtArgs>
        fields: Prisma.RouteStopWaypointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteStopWaypointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteStopWaypointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload>
          }
          findFirst: {
            args: Prisma.RouteStopWaypointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteStopWaypointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload>
          }
          findMany: {
            args: Prisma.RouteStopWaypointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload>[]
          }
          create: {
            args: Prisma.RouteStopWaypointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload>
          }
          createMany: {
            args: Prisma.RouteStopWaypointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteStopWaypointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload>
          }
          update: {
            args: Prisma.RouteStopWaypointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload>
          }
          deleteMany: {
            args: Prisma.RouteStopWaypointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteStopWaypointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteStopWaypointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopWaypointPayload>
          }
          aggregate: {
            args: Prisma.RouteStopWaypointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteStopWaypoint>
          }
          groupBy: {
            args: Prisma.RouteStopWaypointGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteStopWaypointGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteStopWaypointCountArgs<ExtArgs>
            result: $Utils.Optional<RouteStopWaypointCountAggregateOutputType> | number
          }
        }
      }
      Icar: {
        payload: Prisma.$IcarPayload<ExtArgs>
        fields: Prisma.IcarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IcarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IcarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload>
          }
          findFirst: {
            args: Prisma.IcarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IcarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload>
          }
          findMany: {
            args: Prisma.IcarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload>[]
          }
          create: {
            args: Prisma.IcarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload>
          }
          createMany: {
            args: Prisma.IcarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IcarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload>
          }
          update: {
            args: Prisma.IcarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload>
          }
          deleteMany: {
            args: Prisma.IcarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IcarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IcarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IcarPayload>
          }
          aggregate: {
            args: Prisma.IcarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIcar>
          }
          groupBy: {
            args: Prisma.IcarGroupByArgs<ExtArgs>
            result: $Utils.Optional<IcarGroupByOutputType>[]
          }
          count: {
            args: Prisma.IcarCountArgs<ExtArgs>
            result: $Utils.Optional<IcarCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    icarRoute?: IcarRouteOmit
    icarStop?: IcarStopOmit
    routeStopWaypoint?: RouteStopWaypointOmit
    icar?: IcarOmit
    schedule?: ScheduleOmit
    user?: UserOmit
    ticket?: TicketOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type IcarRouteCountOutputType
   */

  export type IcarRouteCountOutputType = {
    icars: number
    routeStopWaypoints: number
  }

  export type IcarRouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icars?: boolean | IcarRouteCountOutputTypeCountIcarsArgs
    routeStopWaypoints?: boolean | IcarRouteCountOutputTypeCountRouteStopWaypointsArgs
  }

  // Custom InputTypes
  /**
   * IcarRouteCountOutputType without action
   */
  export type IcarRouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRouteCountOutputType
     */
    select?: IcarRouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IcarRouteCountOutputType without action
   */
  export type IcarRouteCountOutputTypeCountIcarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IcarWhereInput
  }

  /**
   * IcarRouteCountOutputType without action
   */
  export type IcarRouteCountOutputTypeCountRouteStopWaypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWaypointWhereInput
  }


  /**
   * Count Type IcarStopCountOutputType
   */

  export type IcarStopCountOutputType = {
    routeStopWaypoints: number
    schedules: number
  }

  export type IcarStopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routeStopWaypoints?: boolean | IcarStopCountOutputTypeCountRouteStopWaypointsArgs
    schedules?: boolean | IcarStopCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * IcarStopCountOutputType without action
   */
  export type IcarStopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStopCountOutputType
     */
    select?: IcarStopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IcarStopCountOutputType without action
   */
  export type IcarStopCountOutputTypeCountRouteStopWaypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWaypointWhereInput
  }

  /**
   * IcarStopCountOutputType without action
   */
  export type IcarStopCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type IcarCountOutputType
   */

  export type IcarCountOutputType = {
    schedules: number
  }

  export type IcarCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | IcarCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * IcarCountOutputType without action
   */
  export type IcarCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarCountOutputType
     */
    select?: IcarCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IcarCountOutputType without action
   */
  export type IcarCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    tickets: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ScheduleCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Models
   */

  /**
   * Model IcarRoute
   */

  export type AggregateIcarRoute = {
    _count: IcarRouteCountAggregateOutputType | null
    _avg: IcarRouteAvgAggregateOutputType | null
    _sum: IcarRouteSumAggregateOutputType | null
    _min: IcarRouteMinAggregateOutputType | null
    _max: IcarRouteMaxAggregateOutputType | null
  }

  export type IcarRouteAvgAggregateOutputType = {
    id: number | null
  }

  export type IcarRouteSumAggregateOutputType = {
    id: number | null
  }

  export type IcarRouteMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
  }

  export type IcarRouteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
  }

  export type IcarRouteCountAggregateOutputType = {
    id: number
    name: number
    color: number
    _all: number
  }


  export type IcarRouteAvgAggregateInputType = {
    id?: true
  }

  export type IcarRouteSumAggregateInputType = {
    id?: true
  }

  export type IcarRouteMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type IcarRouteMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type IcarRouteCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    _all?: true
  }

  export type IcarRouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IcarRoute to aggregate.
     */
    where?: IcarRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarRoutes to fetch.
     */
    orderBy?: IcarRouteOrderByWithRelationInput | IcarRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IcarRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IcarRoutes
    **/
    _count?: true | IcarRouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IcarRouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IcarRouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IcarRouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IcarRouteMaxAggregateInputType
  }

  export type GetIcarRouteAggregateType<T extends IcarRouteAggregateArgs> = {
        [P in keyof T & keyof AggregateIcarRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIcarRoute[P]>
      : GetScalarType<T[P], AggregateIcarRoute[P]>
  }




  export type IcarRouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IcarRouteWhereInput
    orderBy?: IcarRouteOrderByWithAggregationInput | IcarRouteOrderByWithAggregationInput[]
    by: IcarRouteScalarFieldEnum[] | IcarRouteScalarFieldEnum
    having?: IcarRouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IcarRouteCountAggregateInputType | true
    _avg?: IcarRouteAvgAggregateInputType
    _sum?: IcarRouteSumAggregateInputType
    _min?: IcarRouteMinAggregateInputType
    _max?: IcarRouteMaxAggregateInputType
  }

  export type IcarRouteGroupByOutputType = {
    id: number
    name: string
    color: string
    _count: IcarRouteCountAggregateOutputType | null
    _avg: IcarRouteAvgAggregateOutputType | null
    _sum: IcarRouteSumAggregateOutputType | null
    _min: IcarRouteMinAggregateOutputType | null
    _max: IcarRouteMaxAggregateOutputType | null
  }

  type GetIcarRouteGroupByPayload<T extends IcarRouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IcarRouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IcarRouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IcarRouteGroupByOutputType[P]>
            : GetScalarType<T[P], IcarRouteGroupByOutputType[P]>
        }
      >
    >


  export type IcarRouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    icars?: boolean | IcarRoute$icarsArgs<ExtArgs>
    routeStopWaypoints?: boolean | IcarRoute$routeStopWaypointsArgs<ExtArgs>
    _count?: boolean | IcarRouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["icarRoute"]>



  export type IcarRouteSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
  }

  export type IcarRouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color", ExtArgs["result"]["icarRoute"]>
  export type IcarRouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icars?: boolean | IcarRoute$icarsArgs<ExtArgs>
    routeStopWaypoints?: boolean | IcarRoute$routeStopWaypointsArgs<ExtArgs>
    _count?: boolean | IcarRouteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IcarRoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IcarRoute"
    objects: {
      icars: Prisma.$IcarPayload<ExtArgs>[]
      routeStopWaypoints: Prisma.$RouteStopWaypointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string
    }, ExtArgs["result"]["icarRoute"]>
    composites: {}
  }

  type IcarRouteGetPayload<S extends boolean | null | undefined | IcarRouteDefaultArgs> = $Result.GetResult<Prisma.$IcarRoutePayload, S>

  type IcarRouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IcarRouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IcarRouteCountAggregateInputType | true
    }

  export interface IcarRouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IcarRoute'], meta: { name: 'IcarRoute' } }
    /**
     * Find zero or one IcarRoute that matches the filter.
     * @param {IcarRouteFindUniqueArgs} args - Arguments to find a IcarRoute
     * @example
     * // Get one IcarRoute
     * const icarRoute = await prisma.icarRoute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IcarRouteFindUniqueArgs>(args: SelectSubset<T, IcarRouteFindUniqueArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IcarRoute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IcarRouteFindUniqueOrThrowArgs} args - Arguments to find a IcarRoute
     * @example
     * // Get one IcarRoute
     * const icarRoute = await prisma.icarRoute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IcarRouteFindUniqueOrThrowArgs>(args: SelectSubset<T, IcarRouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IcarRoute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarRouteFindFirstArgs} args - Arguments to find a IcarRoute
     * @example
     * // Get one IcarRoute
     * const icarRoute = await prisma.icarRoute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IcarRouteFindFirstArgs>(args?: SelectSubset<T, IcarRouteFindFirstArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IcarRoute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarRouteFindFirstOrThrowArgs} args - Arguments to find a IcarRoute
     * @example
     * // Get one IcarRoute
     * const icarRoute = await prisma.icarRoute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IcarRouteFindFirstOrThrowArgs>(args?: SelectSubset<T, IcarRouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IcarRoutes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarRouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IcarRoutes
     * const icarRoutes = await prisma.icarRoute.findMany()
     * 
     * // Get first 10 IcarRoutes
     * const icarRoutes = await prisma.icarRoute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const icarRouteWithIdOnly = await prisma.icarRoute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IcarRouteFindManyArgs>(args?: SelectSubset<T, IcarRouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IcarRoute.
     * @param {IcarRouteCreateArgs} args - Arguments to create a IcarRoute.
     * @example
     * // Create one IcarRoute
     * const IcarRoute = await prisma.icarRoute.create({
     *   data: {
     *     // ... data to create a IcarRoute
     *   }
     * })
     * 
     */
    create<T extends IcarRouteCreateArgs>(args: SelectSubset<T, IcarRouteCreateArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IcarRoutes.
     * @param {IcarRouteCreateManyArgs} args - Arguments to create many IcarRoutes.
     * @example
     * // Create many IcarRoutes
     * const icarRoute = await prisma.icarRoute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IcarRouteCreateManyArgs>(args?: SelectSubset<T, IcarRouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IcarRoute.
     * @param {IcarRouteDeleteArgs} args - Arguments to delete one IcarRoute.
     * @example
     * // Delete one IcarRoute
     * const IcarRoute = await prisma.icarRoute.delete({
     *   where: {
     *     // ... filter to delete one IcarRoute
     *   }
     * })
     * 
     */
    delete<T extends IcarRouteDeleteArgs>(args: SelectSubset<T, IcarRouteDeleteArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IcarRoute.
     * @param {IcarRouteUpdateArgs} args - Arguments to update one IcarRoute.
     * @example
     * // Update one IcarRoute
     * const icarRoute = await prisma.icarRoute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IcarRouteUpdateArgs>(args: SelectSubset<T, IcarRouteUpdateArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IcarRoutes.
     * @param {IcarRouteDeleteManyArgs} args - Arguments to filter IcarRoutes to delete.
     * @example
     * // Delete a few IcarRoutes
     * const { count } = await prisma.icarRoute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IcarRouteDeleteManyArgs>(args?: SelectSubset<T, IcarRouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IcarRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarRouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IcarRoutes
     * const icarRoute = await prisma.icarRoute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IcarRouteUpdateManyArgs>(args: SelectSubset<T, IcarRouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IcarRoute.
     * @param {IcarRouteUpsertArgs} args - Arguments to update or create a IcarRoute.
     * @example
     * // Update or create a IcarRoute
     * const icarRoute = await prisma.icarRoute.upsert({
     *   create: {
     *     // ... data to create a IcarRoute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IcarRoute we want to update
     *   }
     * })
     */
    upsert<T extends IcarRouteUpsertArgs>(args: SelectSubset<T, IcarRouteUpsertArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IcarRoutes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarRouteCountArgs} args - Arguments to filter IcarRoutes to count.
     * @example
     * // Count the number of IcarRoutes
     * const count = await prisma.icarRoute.count({
     *   where: {
     *     // ... the filter for the IcarRoutes we want to count
     *   }
     * })
    **/
    count<T extends IcarRouteCountArgs>(
      args?: Subset<T, IcarRouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IcarRouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IcarRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarRouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IcarRouteAggregateArgs>(args: Subset<T, IcarRouteAggregateArgs>): Prisma.PrismaPromise<GetIcarRouteAggregateType<T>>

    /**
     * Group by IcarRoute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarRouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IcarRouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IcarRouteGroupByArgs['orderBy'] }
        : { orderBy?: IcarRouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IcarRouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIcarRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IcarRoute model
   */
  readonly fields: IcarRouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IcarRoute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IcarRouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icars<T extends IcarRoute$icarsArgs<ExtArgs> = {}>(args?: Subset<T, IcarRoute$icarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routeStopWaypoints<T extends IcarRoute$routeStopWaypointsArgs<ExtArgs> = {}>(args?: Subset<T, IcarRoute$routeStopWaypointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IcarRoute model
   */
  interface IcarRouteFieldRefs {
    readonly id: FieldRef<"IcarRoute", 'Int'>
    readonly name: FieldRef<"IcarRoute", 'String'>
    readonly color: FieldRef<"IcarRoute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IcarRoute findUnique
   */
  export type IcarRouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * Filter, which IcarRoute to fetch.
     */
    where: IcarRouteWhereUniqueInput
  }

  /**
   * IcarRoute findUniqueOrThrow
   */
  export type IcarRouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * Filter, which IcarRoute to fetch.
     */
    where: IcarRouteWhereUniqueInput
  }

  /**
   * IcarRoute findFirst
   */
  export type IcarRouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * Filter, which IcarRoute to fetch.
     */
    where?: IcarRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarRoutes to fetch.
     */
    orderBy?: IcarRouteOrderByWithRelationInput | IcarRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IcarRoutes.
     */
    cursor?: IcarRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IcarRoutes.
     */
    distinct?: IcarRouteScalarFieldEnum | IcarRouteScalarFieldEnum[]
  }

  /**
   * IcarRoute findFirstOrThrow
   */
  export type IcarRouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * Filter, which IcarRoute to fetch.
     */
    where?: IcarRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarRoutes to fetch.
     */
    orderBy?: IcarRouteOrderByWithRelationInput | IcarRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IcarRoutes.
     */
    cursor?: IcarRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarRoutes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IcarRoutes.
     */
    distinct?: IcarRouteScalarFieldEnum | IcarRouteScalarFieldEnum[]
  }

  /**
   * IcarRoute findMany
   */
  export type IcarRouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * Filter, which IcarRoutes to fetch.
     */
    where?: IcarRouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarRoutes to fetch.
     */
    orderBy?: IcarRouteOrderByWithRelationInput | IcarRouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IcarRoutes.
     */
    cursor?: IcarRouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarRoutes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarRoutes.
     */
    skip?: number
    distinct?: IcarRouteScalarFieldEnum | IcarRouteScalarFieldEnum[]
  }

  /**
   * IcarRoute create
   */
  export type IcarRouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * The data needed to create a IcarRoute.
     */
    data: XOR<IcarRouteCreateInput, IcarRouteUncheckedCreateInput>
  }

  /**
   * IcarRoute createMany
   */
  export type IcarRouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IcarRoutes.
     */
    data: IcarRouteCreateManyInput | IcarRouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IcarRoute update
   */
  export type IcarRouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * The data needed to update a IcarRoute.
     */
    data: XOR<IcarRouteUpdateInput, IcarRouteUncheckedUpdateInput>
    /**
     * Choose, which IcarRoute to update.
     */
    where: IcarRouteWhereUniqueInput
  }

  /**
   * IcarRoute updateMany
   */
  export type IcarRouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IcarRoutes.
     */
    data: XOR<IcarRouteUpdateManyMutationInput, IcarRouteUncheckedUpdateManyInput>
    /**
     * Filter which IcarRoutes to update
     */
    where?: IcarRouteWhereInput
    /**
     * Limit how many IcarRoutes to update.
     */
    limit?: number
  }

  /**
   * IcarRoute upsert
   */
  export type IcarRouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * The filter to search for the IcarRoute to update in case it exists.
     */
    where: IcarRouteWhereUniqueInput
    /**
     * In case the IcarRoute found by the `where` argument doesn't exist, create a new IcarRoute with this data.
     */
    create: XOR<IcarRouteCreateInput, IcarRouteUncheckedCreateInput>
    /**
     * In case the IcarRoute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IcarRouteUpdateInput, IcarRouteUncheckedUpdateInput>
  }

  /**
   * IcarRoute delete
   */
  export type IcarRouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
    /**
     * Filter which IcarRoute to delete.
     */
    where: IcarRouteWhereUniqueInput
  }

  /**
   * IcarRoute deleteMany
   */
  export type IcarRouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IcarRoutes to delete
     */
    where?: IcarRouteWhereInput
    /**
     * Limit how many IcarRoutes to delete.
     */
    limit?: number
  }

  /**
   * IcarRoute.icars
   */
  export type IcarRoute$icarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    where?: IcarWhereInput
    orderBy?: IcarOrderByWithRelationInput | IcarOrderByWithRelationInput[]
    cursor?: IcarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IcarScalarFieldEnum | IcarScalarFieldEnum[]
  }

  /**
   * IcarRoute.routeStopWaypoints
   */
  export type IcarRoute$routeStopWaypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    where?: RouteStopWaypointWhereInput
    orderBy?: RouteStopWaypointOrderByWithRelationInput | RouteStopWaypointOrderByWithRelationInput[]
    cursor?: RouteStopWaypointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteStopWaypointScalarFieldEnum | RouteStopWaypointScalarFieldEnum[]
  }

  /**
   * IcarRoute without action
   */
  export type IcarRouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarRoute
     */
    select?: IcarRouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarRoute
     */
    omit?: IcarRouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarRouteInclude<ExtArgs> | null
  }


  /**
   * Model IcarStop
   */

  export type AggregateIcarStop = {
    _count: IcarStopCountAggregateOutputType | null
    _avg: IcarStopAvgAggregateOutputType | null
    _sum: IcarStopSumAggregateOutputType | null
    _min: IcarStopMinAggregateOutputType | null
    _max: IcarStopMaxAggregateOutputType | null
  }

  export type IcarStopAvgAggregateOutputType = {
    id: number | null
  }

  export type IcarStopSumAggregateOutputType = {
    id: number | null
  }

  export type IcarStopMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IcarStopMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type IcarStopCountAggregateOutputType = {
    id: number
    name: number
    coordinate: number
    _all: number
  }


  export type IcarStopAvgAggregateInputType = {
    id?: true
  }

  export type IcarStopSumAggregateInputType = {
    id?: true
  }

  export type IcarStopMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type IcarStopMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type IcarStopCountAggregateInputType = {
    id?: true
    name?: true
    coordinate?: true
    _all?: true
  }

  export type IcarStopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IcarStop to aggregate.
     */
    where?: IcarStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarStops to fetch.
     */
    orderBy?: IcarStopOrderByWithRelationInput | IcarStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IcarStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IcarStops
    **/
    _count?: true | IcarStopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IcarStopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IcarStopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IcarStopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IcarStopMaxAggregateInputType
  }

  export type GetIcarStopAggregateType<T extends IcarStopAggregateArgs> = {
        [P in keyof T & keyof AggregateIcarStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIcarStop[P]>
      : GetScalarType<T[P], AggregateIcarStop[P]>
  }




  export type IcarStopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IcarStopWhereInput
    orderBy?: IcarStopOrderByWithAggregationInput | IcarStopOrderByWithAggregationInput[]
    by: IcarStopScalarFieldEnum[] | IcarStopScalarFieldEnum
    having?: IcarStopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IcarStopCountAggregateInputType | true
    _avg?: IcarStopAvgAggregateInputType
    _sum?: IcarStopSumAggregateInputType
    _min?: IcarStopMinAggregateInputType
    _max?: IcarStopMaxAggregateInputType
  }

  export type IcarStopGroupByOutputType = {
    id: number
    name: string
    coordinate: JsonValue
    _count: IcarStopCountAggregateOutputType | null
    _avg: IcarStopAvgAggregateOutputType | null
    _sum: IcarStopSumAggregateOutputType | null
    _min: IcarStopMinAggregateOutputType | null
    _max: IcarStopMaxAggregateOutputType | null
  }

  type GetIcarStopGroupByPayload<T extends IcarStopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IcarStopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IcarStopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IcarStopGroupByOutputType[P]>
            : GetScalarType<T[P], IcarStopGroupByOutputType[P]>
        }
      >
    >


  export type IcarStopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    coordinate?: boolean
    routeStopWaypoints?: boolean | IcarStop$routeStopWaypointsArgs<ExtArgs>
    schedules?: boolean | IcarStop$schedulesArgs<ExtArgs>
    _count?: boolean | IcarStopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["icarStop"]>



  export type IcarStopSelectScalar = {
    id?: boolean
    name?: boolean
    coordinate?: boolean
  }

  export type IcarStopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "coordinate", ExtArgs["result"]["icarStop"]>
  export type IcarStopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routeStopWaypoints?: boolean | IcarStop$routeStopWaypointsArgs<ExtArgs>
    schedules?: boolean | IcarStop$schedulesArgs<ExtArgs>
    _count?: boolean | IcarStopCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IcarStopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IcarStop"
    objects: {
      routeStopWaypoints: Prisma.$RouteStopWaypointPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      coordinate: Prisma.JsonValue
    }, ExtArgs["result"]["icarStop"]>
    composites: {}
  }

  type IcarStopGetPayload<S extends boolean | null | undefined | IcarStopDefaultArgs> = $Result.GetResult<Prisma.$IcarStopPayload, S>

  type IcarStopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IcarStopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IcarStopCountAggregateInputType | true
    }

  export interface IcarStopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IcarStop'], meta: { name: 'IcarStop' } }
    /**
     * Find zero or one IcarStop that matches the filter.
     * @param {IcarStopFindUniqueArgs} args - Arguments to find a IcarStop
     * @example
     * // Get one IcarStop
     * const icarStop = await prisma.icarStop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IcarStopFindUniqueArgs>(args: SelectSubset<T, IcarStopFindUniqueArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IcarStop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IcarStopFindUniqueOrThrowArgs} args - Arguments to find a IcarStop
     * @example
     * // Get one IcarStop
     * const icarStop = await prisma.icarStop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IcarStopFindUniqueOrThrowArgs>(args: SelectSubset<T, IcarStopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IcarStop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarStopFindFirstArgs} args - Arguments to find a IcarStop
     * @example
     * // Get one IcarStop
     * const icarStop = await prisma.icarStop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IcarStopFindFirstArgs>(args?: SelectSubset<T, IcarStopFindFirstArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IcarStop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarStopFindFirstOrThrowArgs} args - Arguments to find a IcarStop
     * @example
     * // Get one IcarStop
     * const icarStop = await prisma.icarStop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IcarStopFindFirstOrThrowArgs>(args?: SelectSubset<T, IcarStopFindFirstOrThrowArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IcarStops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarStopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IcarStops
     * const icarStops = await prisma.icarStop.findMany()
     * 
     * // Get first 10 IcarStops
     * const icarStops = await prisma.icarStop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const icarStopWithIdOnly = await prisma.icarStop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IcarStopFindManyArgs>(args?: SelectSubset<T, IcarStopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IcarStop.
     * @param {IcarStopCreateArgs} args - Arguments to create a IcarStop.
     * @example
     * // Create one IcarStop
     * const IcarStop = await prisma.icarStop.create({
     *   data: {
     *     // ... data to create a IcarStop
     *   }
     * })
     * 
     */
    create<T extends IcarStopCreateArgs>(args: SelectSubset<T, IcarStopCreateArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IcarStops.
     * @param {IcarStopCreateManyArgs} args - Arguments to create many IcarStops.
     * @example
     * // Create many IcarStops
     * const icarStop = await prisma.icarStop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IcarStopCreateManyArgs>(args?: SelectSubset<T, IcarStopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IcarStop.
     * @param {IcarStopDeleteArgs} args - Arguments to delete one IcarStop.
     * @example
     * // Delete one IcarStop
     * const IcarStop = await prisma.icarStop.delete({
     *   where: {
     *     // ... filter to delete one IcarStop
     *   }
     * })
     * 
     */
    delete<T extends IcarStopDeleteArgs>(args: SelectSubset<T, IcarStopDeleteArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IcarStop.
     * @param {IcarStopUpdateArgs} args - Arguments to update one IcarStop.
     * @example
     * // Update one IcarStop
     * const icarStop = await prisma.icarStop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IcarStopUpdateArgs>(args: SelectSubset<T, IcarStopUpdateArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IcarStops.
     * @param {IcarStopDeleteManyArgs} args - Arguments to filter IcarStops to delete.
     * @example
     * // Delete a few IcarStops
     * const { count } = await prisma.icarStop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IcarStopDeleteManyArgs>(args?: SelectSubset<T, IcarStopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IcarStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarStopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IcarStops
     * const icarStop = await prisma.icarStop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IcarStopUpdateManyArgs>(args: SelectSubset<T, IcarStopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IcarStop.
     * @param {IcarStopUpsertArgs} args - Arguments to update or create a IcarStop.
     * @example
     * // Update or create a IcarStop
     * const icarStop = await prisma.icarStop.upsert({
     *   create: {
     *     // ... data to create a IcarStop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IcarStop we want to update
     *   }
     * })
     */
    upsert<T extends IcarStopUpsertArgs>(args: SelectSubset<T, IcarStopUpsertArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IcarStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarStopCountArgs} args - Arguments to filter IcarStops to count.
     * @example
     * // Count the number of IcarStops
     * const count = await prisma.icarStop.count({
     *   where: {
     *     // ... the filter for the IcarStops we want to count
     *   }
     * })
    **/
    count<T extends IcarStopCountArgs>(
      args?: Subset<T, IcarStopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IcarStopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IcarStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarStopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IcarStopAggregateArgs>(args: Subset<T, IcarStopAggregateArgs>): Prisma.PrismaPromise<GetIcarStopAggregateType<T>>

    /**
     * Group by IcarStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarStopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IcarStopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IcarStopGroupByArgs['orderBy'] }
        : { orderBy?: IcarStopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IcarStopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIcarStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IcarStop model
   */
  readonly fields: IcarStopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IcarStop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IcarStopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routeStopWaypoints<T extends IcarStop$routeStopWaypointsArgs<ExtArgs> = {}>(args?: Subset<T, IcarStop$routeStopWaypointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends IcarStop$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, IcarStop$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IcarStop model
   */
  interface IcarStopFieldRefs {
    readonly id: FieldRef<"IcarStop", 'Int'>
    readonly name: FieldRef<"IcarStop", 'String'>
    readonly coordinate: FieldRef<"IcarStop", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * IcarStop findUnique
   */
  export type IcarStopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * Filter, which IcarStop to fetch.
     */
    where: IcarStopWhereUniqueInput
  }

  /**
   * IcarStop findUniqueOrThrow
   */
  export type IcarStopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * Filter, which IcarStop to fetch.
     */
    where: IcarStopWhereUniqueInput
  }

  /**
   * IcarStop findFirst
   */
  export type IcarStopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * Filter, which IcarStop to fetch.
     */
    where?: IcarStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarStops to fetch.
     */
    orderBy?: IcarStopOrderByWithRelationInput | IcarStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IcarStops.
     */
    cursor?: IcarStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IcarStops.
     */
    distinct?: IcarStopScalarFieldEnum | IcarStopScalarFieldEnum[]
  }

  /**
   * IcarStop findFirstOrThrow
   */
  export type IcarStopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * Filter, which IcarStop to fetch.
     */
    where?: IcarStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarStops to fetch.
     */
    orderBy?: IcarStopOrderByWithRelationInput | IcarStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IcarStops.
     */
    cursor?: IcarStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IcarStops.
     */
    distinct?: IcarStopScalarFieldEnum | IcarStopScalarFieldEnum[]
  }

  /**
   * IcarStop findMany
   */
  export type IcarStopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * Filter, which IcarStops to fetch.
     */
    where?: IcarStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IcarStops to fetch.
     */
    orderBy?: IcarStopOrderByWithRelationInput | IcarStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IcarStops.
     */
    cursor?: IcarStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IcarStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IcarStops.
     */
    skip?: number
    distinct?: IcarStopScalarFieldEnum | IcarStopScalarFieldEnum[]
  }

  /**
   * IcarStop create
   */
  export type IcarStopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * The data needed to create a IcarStop.
     */
    data: XOR<IcarStopCreateInput, IcarStopUncheckedCreateInput>
  }

  /**
   * IcarStop createMany
   */
  export type IcarStopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IcarStops.
     */
    data: IcarStopCreateManyInput | IcarStopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IcarStop update
   */
  export type IcarStopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * The data needed to update a IcarStop.
     */
    data: XOR<IcarStopUpdateInput, IcarStopUncheckedUpdateInput>
    /**
     * Choose, which IcarStop to update.
     */
    where: IcarStopWhereUniqueInput
  }

  /**
   * IcarStop updateMany
   */
  export type IcarStopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IcarStops.
     */
    data: XOR<IcarStopUpdateManyMutationInput, IcarStopUncheckedUpdateManyInput>
    /**
     * Filter which IcarStops to update
     */
    where?: IcarStopWhereInput
    /**
     * Limit how many IcarStops to update.
     */
    limit?: number
  }

  /**
   * IcarStop upsert
   */
  export type IcarStopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * The filter to search for the IcarStop to update in case it exists.
     */
    where: IcarStopWhereUniqueInput
    /**
     * In case the IcarStop found by the `where` argument doesn't exist, create a new IcarStop with this data.
     */
    create: XOR<IcarStopCreateInput, IcarStopUncheckedCreateInput>
    /**
     * In case the IcarStop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IcarStopUpdateInput, IcarStopUncheckedUpdateInput>
  }

  /**
   * IcarStop delete
   */
  export type IcarStopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
    /**
     * Filter which IcarStop to delete.
     */
    where: IcarStopWhereUniqueInput
  }

  /**
   * IcarStop deleteMany
   */
  export type IcarStopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IcarStops to delete
     */
    where?: IcarStopWhereInput
    /**
     * Limit how many IcarStops to delete.
     */
    limit?: number
  }

  /**
   * IcarStop.routeStopWaypoints
   */
  export type IcarStop$routeStopWaypointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    where?: RouteStopWaypointWhereInput
    orderBy?: RouteStopWaypointOrderByWithRelationInput | RouteStopWaypointOrderByWithRelationInput[]
    cursor?: RouteStopWaypointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteStopWaypointScalarFieldEnum | RouteStopWaypointScalarFieldEnum[]
  }

  /**
   * IcarStop.schedules
   */
  export type IcarStop$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * IcarStop without action
   */
  export type IcarStopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IcarStop
     */
    select?: IcarStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IcarStop
     */
    omit?: IcarStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarStopInclude<ExtArgs> | null
  }


  /**
   * Model RouteStopWaypoint
   */

  export type AggregateRouteStopWaypoint = {
    _count: RouteStopWaypointCountAggregateOutputType | null
    _avg: RouteStopWaypointAvgAggregateOutputType | null
    _sum: RouteStopWaypointSumAggregateOutputType | null
    _min: RouteStopWaypointMinAggregateOutputType | null
    _max: RouteStopWaypointMaxAggregateOutputType | null
  }

  export type RouteStopWaypointAvgAggregateOutputType = {
    id: number | null
    icarRouteId: number | null
    icarStopId: number | null
    order: number | null
  }

  export type RouteStopWaypointSumAggregateOutputType = {
    id: number | null
    icarRouteId: number | null
    icarStopId: number | null
    order: number | null
  }

  export type RouteStopWaypointMinAggregateOutputType = {
    id: number | null
    icarRouteId: number | null
    icarStopId: number | null
    order: number | null
  }

  export type RouteStopWaypointMaxAggregateOutputType = {
    id: number | null
    icarRouteId: number | null
    icarStopId: number | null
    order: number | null
  }

  export type RouteStopWaypointCountAggregateOutputType = {
    id: number
    icarRouteId: number
    icarStopId: number
    order: number
    _all: number
  }


  export type RouteStopWaypointAvgAggregateInputType = {
    id?: true
    icarRouteId?: true
    icarStopId?: true
    order?: true
  }

  export type RouteStopWaypointSumAggregateInputType = {
    id?: true
    icarRouteId?: true
    icarStopId?: true
    order?: true
  }

  export type RouteStopWaypointMinAggregateInputType = {
    id?: true
    icarRouteId?: true
    icarStopId?: true
    order?: true
  }

  export type RouteStopWaypointMaxAggregateInputType = {
    id?: true
    icarRouteId?: true
    icarStopId?: true
    order?: true
  }

  export type RouteStopWaypointCountAggregateInputType = {
    id?: true
    icarRouteId?: true
    icarStopId?: true
    order?: true
    _all?: true
  }

  export type RouteStopWaypointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteStopWaypoint to aggregate.
     */
    where?: RouteStopWaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStopWaypoints to fetch.
     */
    orderBy?: RouteStopWaypointOrderByWithRelationInput | RouteStopWaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteStopWaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStopWaypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStopWaypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteStopWaypoints
    **/
    _count?: true | RouteStopWaypointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteStopWaypointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteStopWaypointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteStopWaypointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteStopWaypointMaxAggregateInputType
  }

  export type GetRouteStopWaypointAggregateType<T extends RouteStopWaypointAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteStopWaypoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteStopWaypoint[P]>
      : GetScalarType<T[P], AggregateRouteStopWaypoint[P]>
  }




  export type RouteStopWaypointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWaypointWhereInput
    orderBy?: RouteStopWaypointOrderByWithAggregationInput | RouteStopWaypointOrderByWithAggregationInput[]
    by: RouteStopWaypointScalarFieldEnum[] | RouteStopWaypointScalarFieldEnum
    having?: RouteStopWaypointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteStopWaypointCountAggregateInputType | true
    _avg?: RouteStopWaypointAvgAggregateInputType
    _sum?: RouteStopWaypointSumAggregateInputType
    _min?: RouteStopWaypointMinAggregateInputType
    _max?: RouteStopWaypointMaxAggregateInputType
  }

  export type RouteStopWaypointGroupByOutputType = {
    id: number
    icarRouteId: number
    icarStopId: number
    order: number
    _count: RouteStopWaypointCountAggregateOutputType | null
    _avg: RouteStopWaypointAvgAggregateOutputType | null
    _sum: RouteStopWaypointSumAggregateOutputType | null
    _min: RouteStopWaypointMinAggregateOutputType | null
    _max: RouteStopWaypointMaxAggregateOutputType | null
  }

  type GetRouteStopWaypointGroupByPayload<T extends RouteStopWaypointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteStopWaypointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteStopWaypointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteStopWaypointGroupByOutputType[P]>
            : GetScalarType<T[P], RouteStopWaypointGroupByOutputType[P]>
        }
      >
    >


  export type RouteStopWaypointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    icarRouteId?: boolean
    icarStopId?: boolean
    order?: boolean
    icarRoute?: boolean | IcarRouteDefaultArgs<ExtArgs>
    icarStop?: boolean | IcarStopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeStopWaypoint"]>



  export type RouteStopWaypointSelectScalar = {
    id?: boolean
    icarRouteId?: boolean
    icarStopId?: boolean
    order?: boolean
  }

  export type RouteStopWaypointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "icarRouteId" | "icarStopId" | "order", ExtArgs["result"]["routeStopWaypoint"]>
  export type RouteStopWaypointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icarRoute?: boolean | IcarRouteDefaultArgs<ExtArgs>
    icarStop?: boolean | IcarStopDefaultArgs<ExtArgs>
  }

  export type $RouteStopWaypointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteStopWaypoint"
    objects: {
      icarRoute: Prisma.$IcarRoutePayload<ExtArgs>
      icarStop: Prisma.$IcarStopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      icarRouteId: number
      icarStopId: number
      order: number
    }, ExtArgs["result"]["routeStopWaypoint"]>
    composites: {}
  }

  type RouteStopWaypointGetPayload<S extends boolean | null | undefined | RouteStopWaypointDefaultArgs> = $Result.GetResult<Prisma.$RouteStopWaypointPayload, S>

  type RouteStopWaypointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteStopWaypointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteStopWaypointCountAggregateInputType | true
    }

  export interface RouteStopWaypointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteStopWaypoint'], meta: { name: 'RouteStopWaypoint' } }
    /**
     * Find zero or one RouteStopWaypoint that matches the filter.
     * @param {RouteStopWaypointFindUniqueArgs} args - Arguments to find a RouteStopWaypoint
     * @example
     * // Get one RouteStopWaypoint
     * const routeStopWaypoint = await prisma.routeStopWaypoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteStopWaypointFindUniqueArgs>(args: SelectSubset<T, RouteStopWaypointFindUniqueArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteStopWaypoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteStopWaypointFindUniqueOrThrowArgs} args - Arguments to find a RouteStopWaypoint
     * @example
     * // Get one RouteStopWaypoint
     * const routeStopWaypoint = await prisma.routeStopWaypoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteStopWaypointFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteStopWaypointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteStopWaypoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopWaypointFindFirstArgs} args - Arguments to find a RouteStopWaypoint
     * @example
     * // Get one RouteStopWaypoint
     * const routeStopWaypoint = await prisma.routeStopWaypoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteStopWaypointFindFirstArgs>(args?: SelectSubset<T, RouteStopWaypointFindFirstArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteStopWaypoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopWaypointFindFirstOrThrowArgs} args - Arguments to find a RouteStopWaypoint
     * @example
     * // Get one RouteStopWaypoint
     * const routeStopWaypoint = await prisma.routeStopWaypoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteStopWaypointFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteStopWaypointFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteStopWaypoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopWaypointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteStopWaypoints
     * const routeStopWaypoints = await prisma.routeStopWaypoint.findMany()
     * 
     * // Get first 10 RouteStopWaypoints
     * const routeStopWaypoints = await prisma.routeStopWaypoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeStopWaypointWithIdOnly = await prisma.routeStopWaypoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteStopWaypointFindManyArgs>(args?: SelectSubset<T, RouteStopWaypointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteStopWaypoint.
     * @param {RouteStopWaypointCreateArgs} args - Arguments to create a RouteStopWaypoint.
     * @example
     * // Create one RouteStopWaypoint
     * const RouteStopWaypoint = await prisma.routeStopWaypoint.create({
     *   data: {
     *     // ... data to create a RouteStopWaypoint
     *   }
     * })
     * 
     */
    create<T extends RouteStopWaypointCreateArgs>(args: SelectSubset<T, RouteStopWaypointCreateArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteStopWaypoints.
     * @param {RouteStopWaypointCreateManyArgs} args - Arguments to create many RouteStopWaypoints.
     * @example
     * // Create many RouteStopWaypoints
     * const routeStopWaypoint = await prisma.routeStopWaypoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteStopWaypointCreateManyArgs>(args?: SelectSubset<T, RouteStopWaypointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RouteStopWaypoint.
     * @param {RouteStopWaypointDeleteArgs} args - Arguments to delete one RouteStopWaypoint.
     * @example
     * // Delete one RouteStopWaypoint
     * const RouteStopWaypoint = await prisma.routeStopWaypoint.delete({
     *   where: {
     *     // ... filter to delete one RouteStopWaypoint
     *   }
     * })
     * 
     */
    delete<T extends RouteStopWaypointDeleteArgs>(args: SelectSubset<T, RouteStopWaypointDeleteArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteStopWaypoint.
     * @param {RouteStopWaypointUpdateArgs} args - Arguments to update one RouteStopWaypoint.
     * @example
     * // Update one RouteStopWaypoint
     * const routeStopWaypoint = await prisma.routeStopWaypoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteStopWaypointUpdateArgs>(args: SelectSubset<T, RouteStopWaypointUpdateArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteStopWaypoints.
     * @param {RouteStopWaypointDeleteManyArgs} args - Arguments to filter RouteStopWaypoints to delete.
     * @example
     * // Delete a few RouteStopWaypoints
     * const { count } = await prisma.routeStopWaypoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteStopWaypointDeleteManyArgs>(args?: SelectSubset<T, RouteStopWaypointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteStopWaypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopWaypointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteStopWaypoints
     * const routeStopWaypoint = await prisma.routeStopWaypoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteStopWaypointUpdateManyArgs>(args: SelectSubset<T, RouteStopWaypointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RouteStopWaypoint.
     * @param {RouteStopWaypointUpsertArgs} args - Arguments to update or create a RouteStopWaypoint.
     * @example
     * // Update or create a RouteStopWaypoint
     * const routeStopWaypoint = await prisma.routeStopWaypoint.upsert({
     *   create: {
     *     // ... data to create a RouteStopWaypoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteStopWaypoint we want to update
     *   }
     * })
     */
    upsert<T extends RouteStopWaypointUpsertArgs>(args: SelectSubset<T, RouteStopWaypointUpsertArgs<ExtArgs>>): Prisma__RouteStopWaypointClient<$Result.GetResult<Prisma.$RouteStopWaypointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteStopWaypoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopWaypointCountArgs} args - Arguments to filter RouteStopWaypoints to count.
     * @example
     * // Count the number of RouteStopWaypoints
     * const count = await prisma.routeStopWaypoint.count({
     *   where: {
     *     // ... the filter for the RouteStopWaypoints we want to count
     *   }
     * })
    **/
    count<T extends RouteStopWaypointCountArgs>(
      args?: Subset<T, RouteStopWaypointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteStopWaypointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteStopWaypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopWaypointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteStopWaypointAggregateArgs>(args: Subset<T, RouteStopWaypointAggregateArgs>): Prisma.PrismaPromise<GetRouteStopWaypointAggregateType<T>>

    /**
     * Group by RouteStopWaypoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopWaypointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteStopWaypointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteStopWaypointGroupByArgs['orderBy'] }
        : { orderBy?: RouteStopWaypointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteStopWaypointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteStopWaypointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteStopWaypoint model
   */
  readonly fields: RouteStopWaypointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteStopWaypoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteStopWaypointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icarRoute<T extends IcarRouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IcarRouteDefaultArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    icarStop<T extends IcarStopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IcarStopDefaultArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteStopWaypoint model
   */
  interface RouteStopWaypointFieldRefs {
    readonly id: FieldRef<"RouteStopWaypoint", 'Int'>
    readonly icarRouteId: FieldRef<"RouteStopWaypoint", 'Int'>
    readonly icarStopId: FieldRef<"RouteStopWaypoint", 'Int'>
    readonly order: FieldRef<"RouteStopWaypoint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RouteStopWaypoint findUnique
   */
  export type RouteStopWaypointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * Filter, which RouteStopWaypoint to fetch.
     */
    where: RouteStopWaypointWhereUniqueInput
  }

  /**
   * RouteStopWaypoint findUniqueOrThrow
   */
  export type RouteStopWaypointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * Filter, which RouteStopWaypoint to fetch.
     */
    where: RouteStopWaypointWhereUniqueInput
  }

  /**
   * RouteStopWaypoint findFirst
   */
  export type RouteStopWaypointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * Filter, which RouteStopWaypoint to fetch.
     */
    where?: RouteStopWaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStopWaypoints to fetch.
     */
    orderBy?: RouteStopWaypointOrderByWithRelationInput | RouteStopWaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteStopWaypoints.
     */
    cursor?: RouteStopWaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStopWaypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStopWaypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteStopWaypoints.
     */
    distinct?: RouteStopWaypointScalarFieldEnum | RouteStopWaypointScalarFieldEnum[]
  }

  /**
   * RouteStopWaypoint findFirstOrThrow
   */
  export type RouteStopWaypointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * Filter, which RouteStopWaypoint to fetch.
     */
    where?: RouteStopWaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStopWaypoints to fetch.
     */
    orderBy?: RouteStopWaypointOrderByWithRelationInput | RouteStopWaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteStopWaypoints.
     */
    cursor?: RouteStopWaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStopWaypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStopWaypoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteStopWaypoints.
     */
    distinct?: RouteStopWaypointScalarFieldEnum | RouteStopWaypointScalarFieldEnum[]
  }

  /**
   * RouteStopWaypoint findMany
   */
  export type RouteStopWaypointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * Filter, which RouteStopWaypoints to fetch.
     */
    where?: RouteStopWaypointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStopWaypoints to fetch.
     */
    orderBy?: RouteStopWaypointOrderByWithRelationInput | RouteStopWaypointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteStopWaypoints.
     */
    cursor?: RouteStopWaypointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStopWaypoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStopWaypoints.
     */
    skip?: number
    distinct?: RouteStopWaypointScalarFieldEnum | RouteStopWaypointScalarFieldEnum[]
  }

  /**
   * RouteStopWaypoint create
   */
  export type RouteStopWaypointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteStopWaypoint.
     */
    data: XOR<RouteStopWaypointCreateInput, RouteStopWaypointUncheckedCreateInput>
  }

  /**
   * RouteStopWaypoint createMany
   */
  export type RouteStopWaypointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteStopWaypoints.
     */
    data: RouteStopWaypointCreateManyInput | RouteStopWaypointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteStopWaypoint update
   */
  export type RouteStopWaypointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteStopWaypoint.
     */
    data: XOR<RouteStopWaypointUpdateInput, RouteStopWaypointUncheckedUpdateInput>
    /**
     * Choose, which RouteStopWaypoint to update.
     */
    where: RouteStopWaypointWhereUniqueInput
  }

  /**
   * RouteStopWaypoint updateMany
   */
  export type RouteStopWaypointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteStopWaypoints.
     */
    data: XOR<RouteStopWaypointUpdateManyMutationInput, RouteStopWaypointUncheckedUpdateManyInput>
    /**
     * Filter which RouteStopWaypoints to update
     */
    where?: RouteStopWaypointWhereInput
    /**
     * Limit how many RouteStopWaypoints to update.
     */
    limit?: number
  }

  /**
   * RouteStopWaypoint upsert
   */
  export type RouteStopWaypointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteStopWaypoint to update in case it exists.
     */
    where: RouteStopWaypointWhereUniqueInput
    /**
     * In case the RouteStopWaypoint found by the `where` argument doesn't exist, create a new RouteStopWaypoint with this data.
     */
    create: XOR<RouteStopWaypointCreateInput, RouteStopWaypointUncheckedCreateInput>
    /**
     * In case the RouteStopWaypoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteStopWaypointUpdateInput, RouteStopWaypointUncheckedUpdateInput>
  }

  /**
   * RouteStopWaypoint delete
   */
  export type RouteStopWaypointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
    /**
     * Filter which RouteStopWaypoint to delete.
     */
    where: RouteStopWaypointWhereUniqueInput
  }

  /**
   * RouteStopWaypoint deleteMany
   */
  export type RouteStopWaypointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteStopWaypoints to delete
     */
    where?: RouteStopWaypointWhereInput
    /**
     * Limit how many RouteStopWaypoints to delete.
     */
    limit?: number
  }

  /**
   * RouteStopWaypoint without action
   */
  export type RouteStopWaypointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStopWaypoint
     */
    select?: RouteStopWaypointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStopWaypoint
     */
    omit?: RouteStopWaypointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopWaypointInclude<ExtArgs> | null
  }


  /**
   * Model Icar
   */

  export type AggregateIcar = {
    _count: IcarCountAggregateOutputType | null
    _avg: IcarAvgAggregateOutputType | null
    _sum: IcarSumAggregateOutputType | null
    _min: IcarMinAggregateOutputType | null
    _max: IcarMaxAggregateOutputType | null
  }

  export type IcarAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
    icarRouteId: number | null
  }

  export type IcarSumAggregateOutputType = {
    id: number | null
    capacity: number | null
    icarRouteId: number | null
  }

  export type IcarMinAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    status: $Enums.IcarStatus | null
    icarRouteId: number | null
  }

  export type IcarMaxAggregateOutputType = {
    id: number | null
    name: string | null
    capacity: number | null
    status: $Enums.IcarStatus | null
    icarRouteId: number | null
  }

  export type IcarCountAggregateOutputType = {
    id: number
    name: number
    capacity: number
    status: number
    icarRouteId: number
    _all: number
  }


  export type IcarAvgAggregateInputType = {
    id?: true
    capacity?: true
    icarRouteId?: true
  }

  export type IcarSumAggregateInputType = {
    id?: true
    capacity?: true
    icarRouteId?: true
  }

  export type IcarMinAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
    icarRouteId?: true
  }

  export type IcarMaxAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
    icarRouteId?: true
  }

  export type IcarCountAggregateInputType = {
    id?: true
    name?: true
    capacity?: true
    status?: true
    icarRouteId?: true
    _all?: true
  }

  export type IcarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icar to aggregate.
     */
    where?: IcarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icars to fetch.
     */
    orderBy?: IcarOrderByWithRelationInput | IcarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IcarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Icars
    **/
    _count?: true | IcarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IcarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IcarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IcarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IcarMaxAggregateInputType
  }

  export type GetIcarAggregateType<T extends IcarAggregateArgs> = {
        [P in keyof T & keyof AggregateIcar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIcar[P]>
      : GetScalarType<T[P], AggregateIcar[P]>
  }




  export type IcarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IcarWhereInput
    orderBy?: IcarOrderByWithAggregationInput | IcarOrderByWithAggregationInput[]
    by: IcarScalarFieldEnum[] | IcarScalarFieldEnum
    having?: IcarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IcarCountAggregateInputType | true
    _avg?: IcarAvgAggregateInputType
    _sum?: IcarSumAggregateInputType
    _min?: IcarMinAggregateInputType
    _max?: IcarMaxAggregateInputType
  }

  export type IcarGroupByOutputType = {
    id: number
    name: string
    capacity: number
    status: $Enums.IcarStatus
    icarRouteId: number
    _count: IcarCountAggregateOutputType | null
    _avg: IcarAvgAggregateOutputType | null
    _sum: IcarSumAggregateOutputType | null
    _min: IcarMinAggregateOutputType | null
    _max: IcarMaxAggregateOutputType | null
  }

  type GetIcarGroupByPayload<T extends IcarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IcarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IcarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IcarGroupByOutputType[P]>
            : GetScalarType<T[P], IcarGroupByOutputType[P]>
        }
      >
    >


  export type IcarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
    icarRouteId?: boolean
    icarRoute?: boolean | IcarRouteDefaultArgs<ExtArgs>
    schedules?: boolean | Icar$schedulesArgs<ExtArgs>
    _count?: boolean | IcarCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["icar"]>



  export type IcarSelectScalar = {
    id?: boolean
    name?: boolean
    capacity?: boolean
    status?: boolean
    icarRouteId?: boolean
  }

  export type IcarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "capacity" | "status" | "icarRouteId", ExtArgs["result"]["icar"]>
  export type IcarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icarRoute?: boolean | IcarRouteDefaultArgs<ExtArgs>
    schedules?: boolean | Icar$schedulesArgs<ExtArgs>
    _count?: boolean | IcarCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $IcarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Icar"
    objects: {
      icarRoute: Prisma.$IcarRoutePayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      capacity: number
      status: $Enums.IcarStatus
      icarRouteId: number
    }, ExtArgs["result"]["icar"]>
    composites: {}
  }

  type IcarGetPayload<S extends boolean | null | undefined | IcarDefaultArgs> = $Result.GetResult<Prisma.$IcarPayload, S>

  type IcarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IcarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IcarCountAggregateInputType | true
    }

  export interface IcarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Icar'], meta: { name: 'Icar' } }
    /**
     * Find zero or one Icar that matches the filter.
     * @param {IcarFindUniqueArgs} args - Arguments to find a Icar
     * @example
     * // Get one Icar
     * const icar = await prisma.icar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IcarFindUniqueArgs>(args: SelectSubset<T, IcarFindUniqueArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Icar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IcarFindUniqueOrThrowArgs} args - Arguments to find a Icar
     * @example
     * // Get one Icar
     * const icar = await prisma.icar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IcarFindUniqueOrThrowArgs>(args: SelectSubset<T, IcarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Icar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarFindFirstArgs} args - Arguments to find a Icar
     * @example
     * // Get one Icar
     * const icar = await prisma.icar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IcarFindFirstArgs>(args?: SelectSubset<T, IcarFindFirstArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Icar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarFindFirstOrThrowArgs} args - Arguments to find a Icar
     * @example
     * // Get one Icar
     * const icar = await prisma.icar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IcarFindFirstOrThrowArgs>(args?: SelectSubset<T, IcarFindFirstOrThrowArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Icars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Icars
     * const icars = await prisma.icar.findMany()
     * 
     * // Get first 10 Icars
     * const icars = await prisma.icar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const icarWithIdOnly = await prisma.icar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IcarFindManyArgs>(args?: SelectSubset<T, IcarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Icar.
     * @param {IcarCreateArgs} args - Arguments to create a Icar.
     * @example
     * // Create one Icar
     * const Icar = await prisma.icar.create({
     *   data: {
     *     // ... data to create a Icar
     *   }
     * })
     * 
     */
    create<T extends IcarCreateArgs>(args: SelectSubset<T, IcarCreateArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Icars.
     * @param {IcarCreateManyArgs} args - Arguments to create many Icars.
     * @example
     * // Create many Icars
     * const icar = await prisma.icar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IcarCreateManyArgs>(args?: SelectSubset<T, IcarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Icar.
     * @param {IcarDeleteArgs} args - Arguments to delete one Icar.
     * @example
     * // Delete one Icar
     * const Icar = await prisma.icar.delete({
     *   where: {
     *     // ... filter to delete one Icar
     *   }
     * })
     * 
     */
    delete<T extends IcarDeleteArgs>(args: SelectSubset<T, IcarDeleteArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Icar.
     * @param {IcarUpdateArgs} args - Arguments to update one Icar.
     * @example
     * // Update one Icar
     * const icar = await prisma.icar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IcarUpdateArgs>(args: SelectSubset<T, IcarUpdateArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Icars.
     * @param {IcarDeleteManyArgs} args - Arguments to filter Icars to delete.
     * @example
     * // Delete a few Icars
     * const { count } = await prisma.icar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IcarDeleteManyArgs>(args?: SelectSubset<T, IcarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Icars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Icars
     * const icar = await prisma.icar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IcarUpdateManyArgs>(args: SelectSubset<T, IcarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Icar.
     * @param {IcarUpsertArgs} args - Arguments to update or create a Icar.
     * @example
     * // Update or create a Icar
     * const icar = await prisma.icar.upsert({
     *   create: {
     *     // ... data to create a Icar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Icar we want to update
     *   }
     * })
     */
    upsert<T extends IcarUpsertArgs>(args: SelectSubset<T, IcarUpsertArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Icars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarCountArgs} args - Arguments to filter Icars to count.
     * @example
     * // Count the number of Icars
     * const count = await prisma.icar.count({
     *   where: {
     *     // ... the filter for the Icars we want to count
     *   }
     * })
    **/
    count<T extends IcarCountArgs>(
      args?: Subset<T, IcarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IcarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Icar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IcarAggregateArgs>(args: Subset<T, IcarAggregateArgs>): Prisma.PrismaPromise<GetIcarAggregateType<T>>

    /**
     * Group by Icar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IcarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IcarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IcarGroupByArgs['orderBy'] }
        : { orderBy?: IcarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IcarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIcarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Icar model
   */
  readonly fields: IcarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Icar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IcarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icarRoute<T extends IcarRouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IcarRouteDefaultArgs<ExtArgs>>): Prisma__IcarRouteClient<$Result.GetResult<Prisma.$IcarRoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Icar$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Icar$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Icar model
   */
  interface IcarFieldRefs {
    readonly id: FieldRef<"Icar", 'Int'>
    readonly name: FieldRef<"Icar", 'String'>
    readonly capacity: FieldRef<"Icar", 'Int'>
    readonly status: FieldRef<"Icar", 'IcarStatus'>
    readonly icarRouteId: FieldRef<"Icar", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Icar findUnique
   */
  export type IcarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * Filter, which Icar to fetch.
     */
    where: IcarWhereUniqueInput
  }

  /**
   * Icar findUniqueOrThrow
   */
  export type IcarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * Filter, which Icar to fetch.
     */
    where: IcarWhereUniqueInput
  }

  /**
   * Icar findFirst
   */
  export type IcarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * Filter, which Icar to fetch.
     */
    where?: IcarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icars to fetch.
     */
    orderBy?: IcarOrderByWithRelationInput | IcarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icars.
     */
    cursor?: IcarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icars.
     */
    distinct?: IcarScalarFieldEnum | IcarScalarFieldEnum[]
  }

  /**
   * Icar findFirstOrThrow
   */
  export type IcarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * Filter, which Icar to fetch.
     */
    where?: IcarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icars to fetch.
     */
    orderBy?: IcarOrderByWithRelationInput | IcarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Icars.
     */
    cursor?: IcarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Icars.
     */
    distinct?: IcarScalarFieldEnum | IcarScalarFieldEnum[]
  }

  /**
   * Icar findMany
   */
  export type IcarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * Filter, which Icars to fetch.
     */
    where?: IcarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Icars to fetch.
     */
    orderBy?: IcarOrderByWithRelationInput | IcarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Icars.
     */
    cursor?: IcarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Icars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Icars.
     */
    skip?: number
    distinct?: IcarScalarFieldEnum | IcarScalarFieldEnum[]
  }

  /**
   * Icar create
   */
  export type IcarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * The data needed to create a Icar.
     */
    data: XOR<IcarCreateInput, IcarUncheckedCreateInput>
  }

  /**
   * Icar createMany
   */
  export type IcarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Icars.
     */
    data: IcarCreateManyInput | IcarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Icar update
   */
  export type IcarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * The data needed to update a Icar.
     */
    data: XOR<IcarUpdateInput, IcarUncheckedUpdateInput>
    /**
     * Choose, which Icar to update.
     */
    where: IcarWhereUniqueInput
  }

  /**
   * Icar updateMany
   */
  export type IcarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Icars.
     */
    data: XOR<IcarUpdateManyMutationInput, IcarUncheckedUpdateManyInput>
    /**
     * Filter which Icars to update
     */
    where?: IcarWhereInput
    /**
     * Limit how many Icars to update.
     */
    limit?: number
  }

  /**
   * Icar upsert
   */
  export type IcarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * The filter to search for the Icar to update in case it exists.
     */
    where: IcarWhereUniqueInput
    /**
     * In case the Icar found by the `where` argument doesn't exist, create a new Icar with this data.
     */
    create: XOR<IcarCreateInput, IcarUncheckedCreateInput>
    /**
     * In case the Icar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IcarUpdateInput, IcarUncheckedUpdateInput>
  }

  /**
   * Icar delete
   */
  export type IcarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
    /**
     * Filter which Icar to delete.
     */
    where: IcarWhereUniqueInput
  }

  /**
   * Icar deleteMany
   */
  export type IcarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Icars to delete
     */
    where?: IcarWhereInput
    /**
     * Limit how many Icars to delete.
     */
    limit?: number
  }

  /**
   * Icar.schedules
   */
  export type Icar$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Icar without action
   */
  export type IcarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Icar
     */
    select?: IcarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Icar
     */
    omit?: IcarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IcarInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    icarId: number | null
    icarStopId: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    icarId: number | null
    icarStopId: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    session: $Enums.ScheduleSession | null
    arrivalTime: Date | null
    icarId: number | null
    icarStopId: number | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    session: $Enums.ScheduleSession | null
    arrivalTime: Date | null
    icarId: number | null
    icarStopId: number | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    session: number
    arrivalTime: number
    icarId: number
    icarStopId: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    icarId?: true
    icarStopId?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    icarId?: true
    icarStopId?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    session?: true
    arrivalTime?: true
    icarId?: true
    icarStopId?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    session?: true
    arrivalTime?: true
    icarId?: true
    icarStopId?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    session?: true
    arrivalTime?: true
    icarId?: true
    icarStopId?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    session: $Enums.ScheduleSession
    arrivalTime: Date
    icarId: number
    icarStopId: number
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session?: boolean
    arrivalTime?: boolean
    icarId?: boolean
    icarStopId?: boolean
    icar?: boolean | IcarDefaultArgs<ExtArgs>
    icarStop?: boolean | IcarStopDefaultArgs<ExtArgs>
    tickets?: boolean | Schedule$ticketsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>



  export type ScheduleSelectScalar = {
    id?: boolean
    session?: boolean
    arrivalTime?: boolean
    icarId?: boolean
    icarStopId?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session" | "arrivalTime" | "icarId" | "icarStopId", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    icar?: boolean | IcarDefaultArgs<ExtArgs>
    icarStop?: boolean | IcarStopDefaultArgs<ExtArgs>
    tickets?: boolean | Schedule$ticketsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      icar: Prisma.$IcarPayload<ExtArgs>
      icarStop: Prisma.$IcarStopPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session: $Enums.ScheduleSession
      arrivalTime: Date
      icarId: number
      icarStopId: number
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    icar<T extends IcarDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IcarDefaultArgs<ExtArgs>>): Prisma__IcarClient<$Result.GetResult<Prisma.$IcarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    icarStop<T extends IcarStopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IcarStopDefaultArgs<ExtArgs>>): Prisma__IcarStopClient<$Result.GetResult<Prisma.$IcarStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Schedule$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly session: FieldRef<"Schedule", 'ScheduleSession'>
    readonly arrivalTime: FieldRef<"Schedule", 'DateTime'>
    readonly icarId: FieldRef<"Schedule", 'Int'>
    readonly icarStopId: FieldRef<"Schedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.tickets
   */
  export type Schedule$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    scheduleId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    userId: number | null
    scheduleId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    expiredAt: Date | null
    status: $Enums.TicketStatus | null
    userId: number | null
    scheduleId: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    expiredAt: Date | null
    status: $Enums.TicketStatus | null
    userId: number | null
    scheduleId: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    expiredAt: number
    status: number
    userId: number
    scheduleId: number
    review: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    expiredAt?: true
    status?: true
    userId?: true
    scheduleId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    expiredAt?: true
    status?: true
    userId?: true
    scheduleId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    expiredAt?: true
    status?: true
    userId?: true
    scheduleId?: true
    review?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    expiredAt: Date
    status: $Enums.TicketStatus
    userId: number
    scheduleId: number
    review: JsonValue | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiredAt?: boolean
    status?: boolean
    userId?: boolean
    scheduleId?: boolean
    review?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    expiredAt?: boolean
    status?: boolean
    userId?: boolean
    scheduleId?: boolean
    review?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiredAt" | "status" | "userId" | "scheduleId" | "review", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expiredAt: Date
      status: $Enums.TicketStatus
      userId: number
      scheduleId: number
      review: Prisma.JsonValue | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly expiredAt: FieldRef<"Ticket", 'DateTime'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly userId: FieldRef<"Ticket", 'Int'>
    readonly scheduleId: FieldRef<"Ticket", 'Int'>
    readonly review: FieldRef<"Ticket", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IcarRouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color'
  };

  export type IcarRouteScalarFieldEnum = (typeof IcarRouteScalarFieldEnum)[keyof typeof IcarRouteScalarFieldEnum]


  export const IcarStopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coordinate: 'coordinate'
  };

  export type IcarStopScalarFieldEnum = (typeof IcarStopScalarFieldEnum)[keyof typeof IcarStopScalarFieldEnum]


  export const RouteStopWaypointScalarFieldEnum: {
    id: 'id',
    icarRouteId: 'icarRouteId',
    icarStopId: 'icarStopId',
    order: 'order'
  };

  export type RouteStopWaypointScalarFieldEnum = (typeof RouteStopWaypointScalarFieldEnum)[keyof typeof RouteStopWaypointScalarFieldEnum]


  export const IcarScalarFieldEnum: {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    status: 'status',
    icarRouteId: 'icarRouteId'
  };

  export type IcarScalarFieldEnum = (typeof IcarScalarFieldEnum)[keyof typeof IcarScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    session: 'session',
    arrivalTime: 'arrivalTime',
    icarId: 'icarId',
    icarStopId: 'icarStopId'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    expiredAt: 'expiredAt',
    status: 'status',
    userId: 'userId',
    scheduleId: 'scheduleId',
    review: 'review'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const IcarRouteOrderByRelevanceFieldEnum: {
    name: 'name',
    color: 'color'
  };

  export type IcarRouteOrderByRelevanceFieldEnum = (typeof IcarRouteOrderByRelevanceFieldEnum)[keyof typeof IcarRouteOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const IcarStopOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type IcarStopOrderByRelevanceFieldEnum = (typeof IcarStopOrderByRelevanceFieldEnum)[keyof typeof IcarStopOrderByRelevanceFieldEnum]


  export const IcarOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type IcarOrderByRelevanceFieldEnum = (typeof IcarOrderByRelevanceFieldEnum)[keyof typeof IcarOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'IcarStatus'
   */
  export type EnumIcarStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IcarStatus'>
    


  /**
   * Reference to a field of type 'ScheduleSession'
   */
  export type EnumScheduleSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleSession'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type IcarRouteWhereInput = {
    AND?: IcarRouteWhereInput | IcarRouteWhereInput[]
    OR?: IcarRouteWhereInput[]
    NOT?: IcarRouteWhereInput | IcarRouteWhereInput[]
    id?: IntFilter<"IcarRoute"> | number
    name?: StringFilter<"IcarRoute"> | string
    color?: StringFilter<"IcarRoute"> | string
    icars?: IcarListRelationFilter
    routeStopWaypoints?: RouteStopWaypointListRelationFilter
  }

  export type IcarRouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icars?: IcarOrderByRelationAggregateInput
    routeStopWaypoints?: RouteStopWaypointOrderByRelationAggregateInput
    _relevance?: IcarRouteOrderByRelevanceInput
  }

  export type IcarRouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: IcarRouteWhereInput | IcarRouteWhereInput[]
    OR?: IcarRouteWhereInput[]
    NOT?: IcarRouteWhereInput | IcarRouteWhereInput[]
    color?: StringFilter<"IcarRoute"> | string
    icars?: IcarListRelationFilter
    routeStopWaypoints?: RouteStopWaypointListRelationFilter
  }, "id" | "name">

  export type IcarRouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    _count?: IcarRouteCountOrderByAggregateInput
    _avg?: IcarRouteAvgOrderByAggregateInput
    _max?: IcarRouteMaxOrderByAggregateInput
    _min?: IcarRouteMinOrderByAggregateInput
    _sum?: IcarRouteSumOrderByAggregateInput
  }

  export type IcarRouteScalarWhereWithAggregatesInput = {
    AND?: IcarRouteScalarWhereWithAggregatesInput | IcarRouteScalarWhereWithAggregatesInput[]
    OR?: IcarRouteScalarWhereWithAggregatesInput[]
    NOT?: IcarRouteScalarWhereWithAggregatesInput | IcarRouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IcarRoute"> | number
    name?: StringWithAggregatesFilter<"IcarRoute"> | string
    color?: StringWithAggregatesFilter<"IcarRoute"> | string
  }

  export type IcarStopWhereInput = {
    AND?: IcarStopWhereInput | IcarStopWhereInput[]
    OR?: IcarStopWhereInput[]
    NOT?: IcarStopWhereInput | IcarStopWhereInput[]
    id?: IntFilter<"IcarStop"> | number
    name?: StringFilter<"IcarStop"> | string
    coordinate?: JsonFilter<"IcarStop">
    routeStopWaypoints?: RouteStopWaypointListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type IcarStopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coordinate?: SortOrder
    routeStopWaypoints?: RouteStopWaypointOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    _relevance?: IcarStopOrderByRelevanceInput
  }

  export type IcarStopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: IcarStopWhereInput | IcarStopWhereInput[]
    OR?: IcarStopWhereInput[]
    NOT?: IcarStopWhereInput | IcarStopWhereInput[]
    coordinate?: JsonFilter<"IcarStop">
    routeStopWaypoints?: RouteStopWaypointListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id" | "name">

  export type IcarStopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coordinate?: SortOrder
    _count?: IcarStopCountOrderByAggregateInput
    _avg?: IcarStopAvgOrderByAggregateInput
    _max?: IcarStopMaxOrderByAggregateInput
    _min?: IcarStopMinOrderByAggregateInput
    _sum?: IcarStopSumOrderByAggregateInput
  }

  export type IcarStopScalarWhereWithAggregatesInput = {
    AND?: IcarStopScalarWhereWithAggregatesInput | IcarStopScalarWhereWithAggregatesInput[]
    OR?: IcarStopScalarWhereWithAggregatesInput[]
    NOT?: IcarStopScalarWhereWithAggregatesInput | IcarStopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IcarStop"> | number
    name?: StringWithAggregatesFilter<"IcarStop"> | string
    coordinate?: JsonWithAggregatesFilter<"IcarStop">
  }

  export type RouteStopWaypointWhereInput = {
    AND?: RouteStopWaypointWhereInput | RouteStopWaypointWhereInput[]
    OR?: RouteStopWaypointWhereInput[]
    NOT?: RouteStopWaypointWhereInput | RouteStopWaypointWhereInput[]
    id?: IntFilter<"RouteStopWaypoint"> | number
    icarRouteId?: IntFilter<"RouteStopWaypoint"> | number
    icarStopId?: IntFilter<"RouteStopWaypoint"> | number
    order?: IntFilter<"RouteStopWaypoint"> | number
    icarRoute?: XOR<IcarRouteScalarRelationFilter, IcarRouteWhereInput>
    icarStop?: XOR<IcarStopScalarRelationFilter, IcarStopWhereInput>
  }

  export type RouteStopWaypointOrderByWithRelationInput = {
    id?: SortOrder
    icarRouteId?: SortOrder
    icarStopId?: SortOrder
    order?: SortOrder
    icarRoute?: IcarRouteOrderByWithRelationInput
    icarStop?: IcarStopOrderByWithRelationInput
  }

  export type RouteStopWaypointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteStopWaypointWhereInput | RouteStopWaypointWhereInput[]
    OR?: RouteStopWaypointWhereInput[]
    NOT?: RouteStopWaypointWhereInput | RouteStopWaypointWhereInput[]
    icarRouteId?: IntFilter<"RouteStopWaypoint"> | number
    icarStopId?: IntFilter<"RouteStopWaypoint"> | number
    order?: IntFilter<"RouteStopWaypoint"> | number
    icarRoute?: XOR<IcarRouteScalarRelationFilter, IcarRouteWhereInput>
    icarStop?: XOR<IcarStopScalarRelationFilter, IcarStopWhereInput>
  }, "id">

  export type RouteStopWaypointOrderByWithAggregationInput = {
    id?: SortOrder
    icarRouteId?: SortOrder
    icarStopId?: SortOrder
    order?: SortOrder
    _count?: RouteStopWaypointCountOrderByAggregateInput
    _avg?: RouteStopWaypointAvgOrderByAggregateInput
    _max?: RouteStopWaypointMaxOrderByAggregateInput
    _min?: RouteStopWaypointMinOrderByAggregateInput
    _sum?: RouteStopWaypointSumOrderByAggregateInput
  }

  export type RouteStopWaypointScalarWhereWithAggregatesInput = {
    AND?: RouteStopWaypointScalarWhereWithAggregatesInput | RouteStopWaypointScalarWhereWithAggregatesInput[]
    OR?: RouteStopWaypointScalarWhereWithAggregatesInput[]
    NOT?: RouteStopWaypointScalarWhereWithAggregatesInput | RouteStopWaypointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RouteStopWaypoint"> | number
    icarRouteId?: IntWithAggregatesFilter<"RouteStopWaypoint"> | number
    icarStopId?: IntWithAggregatesFilter<"RouteStopWaypoint"> | number
    order?: IntWithAggregatesFilter<"RouteStopWaypoint"> | number
  }

  export type IcarWhereInput = {
    AND?: IcarWhereInput | IcarWhereInput[]
    OR?: IcarWhereInput[]
    NOT?: IcarWhereInput | IcarWhereInput[]
    id?: IntFilter<"Icar"> | number
    name?: StringFilter<"Icar"> | string
    capacity?: IntFilter<"Icar"> | number
    status?: EnumIcarStatusFilter<"Icar"> | $Enums.IcarStatus
    icarRouteId?: IntFilter<"Icar"> | number
    icarRoute?: XOR<IcarRouteScalarRelationFilter, IcarRouteWhereInput>
    schedules?: ScheduleListRelationFilter
  }

  export type IcarOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    icarRouteId?: SortOrder
    icarRoute?: IcarRouteOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    _relevance?: IcarOrderByRelevanceInput
  }

  export type IcarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: IcarWhereInput | IcarWhereInput[]
    OR?: IcarWhereInput[]
    NOT?: IcarWhereInput | IcarWhereInput[]
    capacity?: IntFilter<"Icar"> | number
    status?: EnumIcarStatusFilter<"Icar"> | $Enums.IcarStatus
    icarRouteId?: IntFilter<"Icar"> | number
    icarRoute?: XOR<IcarRouteScalarRelationFilter, IcarRouteWhereInput>
    schedules?: ScheduleListRelationFilter
  }, "id" | "name">

  export type IcarOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    icarRouteId?: SortOrder
    _count?: IcarCountOrderByAggregateInput
    _avg?: IcarAvgOrderByAggregateInput
    _max?: IcarMaxOrderByAggregateInput
    _min?: IcarMinOrderByAggregateInput
    _sum?: IcarSumOrderByAggregateInput
  }

  export type IcarScalarWhereWithAggregatesInput = {
    AND?: IcarScalarWhereWithAggregatesInput | IcarScalarWhereWithAggregatesInput[]
    OR?: IcarScalarWhereWithAggregatesInput[]
    NOT?: IcarScalarWhereWithAggregatesInput | IcarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Icar"> | number
    name?: StringWithAggregatesFilter<"Icar"> | string
    capacity?: IntWithAggregatesFilter<"Icar"> | number
    status?: EnumIcarStatusWithAggregatesFilter<"Icar"> | $Enums.IcarStatus
    icarRouteId?: IntWithAggregatesFilter<"Icar"> | number
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    session?: EnumScheduleSessionFilter<"Schedule"> | $Enums.ScheduleSession
    arrivalTime?: DateTimeFilter<"Schedule"> | Date | string
    icarId?: IntFilter<"Schedule"> | number
    icarStopId?: IntFilter<"Schedule"> | number
    icar?: XOR<IcarScalarRelationFilter, IcarWhereInput>
    icarStop?: XOR<IcarStopScalarRelationFilter, IcarStopWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    session?: SortOrder
    arrivalTime?: SortOrder
    icarId?: SortOrder
    icarStopId?: SortOrder
    icar?: IcarOrderByWithRelationInput
    icarStop?: IcarStopOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    session?: EnumScheduleSessionFilter<"Schedule"> | $Enums.ScheduleSession
    arrivalTime?: DateTimeFilter<"Schedule"> | Date | string
    icarId?: IntFilter<"Schedule"> | number
    icarStopId?: IntFilter<"Schedule"> | number
    icar?: XOR<IcarScalarRelationFilter, IcarWhereInput>
    icarStop?: XOR<IcarStopScalarRelationFilter, IcarStopWhereInput>
    tickets?: TicketListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    session?: SortOrder
    arrivalTime?: SortOrder
    icarId?: SortOrder
    icarStopId?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    session?: EnumScheduleSessionWithAggregatesFilter<"Schedule"> | $Enums.ScheduleSession
    arrivalTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    icarId?: IntWithAggregatesFilter<"Schedule"> | number
    icarStopId?: IntWithAggregatesFilter<"Schedule"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    tickets?: TicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    tickets?: TicketListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    expiredAt?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    userId?: IntFilter<"Ticket"> | number
    scheduleId?: IntFilter<"Ticket"> | number
    review?: JsonNullableFilter<"Ticket">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    review?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    schedule?: ScheduleOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    expiredAt?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    userId?: IntFilter<"Ticket"> | number
    scheduleId?: IntFilter<"Ticket"> | number
    review?: JsonNullableFilter<"Ticket">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    review?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    userId?: IntWithAggregatesFilter<"Ticket"> | number
    scheduleId?: IntWithAggregatesFilter<"Ticket"> | number
    review?: JsonNullableWithAggregatesFilter<"Ticket">
  }

  export type IcarRouteCreateInput = {
    name: string
    color: string
    icars?: IcarCreateNestedManyWithoutIcarRouteInput
    routeStopWaypoints?: RouteStopWaypointCreateNestedManyWithoutIcarRouteInput
  }

  export type IcarRouteUncheckedCreateInput = {
    id?: number
    name: string
    color: string
    icars?: IcarUncheckedCreateNestedManyWithoutIcarRouteInput
    routeStopWaypoints?: RouteStopWaypointUncheckedCreateNestedManyWithoutIcarRouteInput
  }

  export type IcarRouteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icars?: IcarUpdateManyWithoutIcarRouteNestedInput
    routeStopWaypoints?: RouteStopWaypointUpdateManyWithoutIcarRouteNestedInput
  }

  export type IcarRouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icars?: IcarUncheckedUpdateManyWithoutIcarRouteNestedInput
    routeStopWaypoints?: RouteStopWaypointUncheckedUpdateManyWithoutIcarRouteNestedInput
  }

  export type IcarRouteCreateManyInput = {
    id?: number
    name: string
    color: string
  }

  export type IcarRouteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type IcarRouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type IcarStopCreateInput = {
    name: string
    coordinate: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointCreateNestedManyWithoutIcarStopInput
    schedules?: ScheduleCreateNestedManyWithoutIcarStopInput
  }

  export type IcarStopUncheckedCreateInput = {
    id?: number
    name: string
    coordinate: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointUncheckedCreateNestedManyWithoutIcarStopInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutIcarStopInput
  }

  export type IcarStopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointUpdateManyWithoutIcarStopNestedInput
    schedules?: ScheduleUpdateManyWithoutIcarStopNestedInput
  }

  export type IcarStopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointUncheckedUpdateManyWithoutIcarStopNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutIcarStopNestedInput
  }

  export type IcarStopCreateManyInput = {
    id?: number
    name: string
    coordinate: JsonNullValueInput | InputJsonValue
  }

  export type IcarStopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
  }

  export type IcarStopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
  }

  export type RouteStopWaypointCreateInput = {
    order: number
    icarRoute: IcarRouteCreateNestedOneWithoutRouteStopWaypointsInput
    icarStop: IcarStopCreateNestedOneWithoutRouteStopWaypointsInput
  }

  export type RouteStopWaypointUncheckedCreateInput = {
    id?: number
    icarRouteId: number
    icarStopId: number
    order: number
  }

  export type RouteStopWaypointUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    icarRoute?: IcarRouteUpdateOneRequiredWithoutRouteStopWaypointsNestedInput
    icarStop?: IcarStopUpdateOneRequiredWithoutRouteStopWaypointsNestedInput
  }

  export type RouteStopWaypointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    icarRouteId?: IntFieldUpdateOperationsInput | number
    icarStopId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RouteStopWaypointCreateManyInput = {
    id?: number
    icarRouteId: number
    icarStopId: number
    order: number
  }

  export type RouteStopWaypointUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RouteStopWaypointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    icarRouteId?: IntFieldUpdateOperationsInput | number
    icarStopId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type IcarCreateInput = {
    name: string
    capacity: number
    status?: $Enums.IcarStatus
    icarRoute: IcarRouteCreateNestedOneWithoutIcarsInput
    schedules?: ScheduleCreateNestedManyWithoutIcarInput
  }

  export type IcarUncheckedCreateInput = {
    id?: number
    name: string
    capacity: number
    status?: $Enums.IcarStatus
    icarRouteId: number
    schedules?: ScheduleUncheckedCreateNestedManyWithoutIcarInput
  }

  export type IcarUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
    icarRoute?: IcarRouteUpdateOneRequiredWithoutIcarsNestedInput
    schedules?: ScheduleUpdateManyWithoutIcarNestedInput
  }

  export type IcarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
    icarRouteId?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUncheckedUpdateManyWithoutIcarNestedInput
  }

  export type IcarCreateManyInput = {
    id?: number
    name: string
    capacity: number
    status?: $Enums.IcarStatus
    icarRouteId: number
  }

  export type IcarUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
  }

  export type IcarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
    icarRouteId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateInput = {
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icar: IcarCreateNestedOneWithoutSchedulesInput
    icarStop: IcarStopCreateNestedOneWithoutSchedulesInput
    tickets?: TicketCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarId: number
    icarStopId: number
    tickets?: TicketUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icar?: IcarUpdateOneRequiredWithoutSchedulesNestedInput
    icarStop?: IcarStopUpdateOneRequiredWithoutSchedulesNestedInput
    tickets?: TicketUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarId?: IntFieldUpdateOperationsInput | number
    icarStopId?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarId: number
    icarStopId: number
  }

  export type ScheduleUpdateManyMutationInput = {
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarId?: IntFieldUpdateOperationsInput | number
    icarStopId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    tickets?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    review?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutTicketsInput
    schedule: ScheduleCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    userId: number
    scheduleId: number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUpdateInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    review?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    schedule?: ScheduleUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    userId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketCreateManyInput = {
    id?: number
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    userId: number
    scheduleId: number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUpdateManyMutationInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    userId?: IntFieldUpdateOperationsInput | number
    scheduleId?: IntFieldUpdateOperationsInput | number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IcarListRelationFilter = {
    every?: IcarWhereInput
    some?: IcarWhereInput
    none?: IcarWhereInput
  }

  export type RouteStopWaypointListRelationFilter = {
    every?: RouteStopWaypointWhereInput
    some?: RouteStopWaypointWhereInput
    none?: RouteStopWaypointWhereInput
  }

  export type IcarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteStopWaypointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IcarRouteOrderByRelevanceInput = {
    fields: IcarRouteOrderByRelevanceFieldEnum | IcarRouteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IcarRouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type IcarRouteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IcarRouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type IcarRouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type IcarRouteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IcarStopOrderByRelevanceInput = {
    fields: IcarStopOrderByRelevanceFieldEnum | IcarStopOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IcarStopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coordinate?: SortOrder
  }

  export type IcarStopAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IcarStopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IcarStopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IcarStopSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type IcarRouteScalarRelationFilter = {
    is?: IcarRouteWhereInput
    isNot?: IcarRouteWhereInput
  }

  export type IcarStopScalarRelationFilter = {
    is?: IcarStopWhereInput
    isNot?: IcarStopWhereInput
  }

  export type RouteStopWaypointCountOrderByAggregateInput = {
    id?: SortOrder
    icarRouteId?: SortOrder
    icarStopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopWaypointAvgOrderByAggregateInput = {
    id?: SortOrder
    icarRouteId?: SortOrder
    icarStopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopWaypointMaxOrderByAggregateInput = {
    id?: SortOrder
    icarRouteId?: SortOrder
    icarStopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopWaypointMinOrderByAggregateInput = {
    id?: SortOrder
    icarRouteId?: SortOrder
    icarStopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopWaypointSumOrderByAggregateInput = {
    id?: SortOrder
    icarRouteId?: SortOrder
    icarStopId?: SortOrder
    order?: SortOrder
  }

  export type EnumIcarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IcarStatus | EnumIcarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IcarStatus[]
    notIn?: $Enums.IcarStatus[]
    not?: NestedEnumIcarStatusFilter<$PrismaModel> | $Enums.IcarStatus
  }

  export type IcarOrderByRelevanceInput = {
    fields: IcarOrderByRelevanceFieldEnum | IcarOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IcarCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    icarRouteId?: SortOrder
  }

  export type IcarAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    icarRouteId?: SortOrder
  }

  export type IcarMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    icarRouteId?: SortOrder
  }

  export type IcarMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    icarRouteId?: SortOrder
  }

  export type IcarSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
    icarRouteId?: SortOrder
  }

  export type EnumIcarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IcarStatus | EnumIcarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IcarStatus[]
    notIn?: $Enums.IcarStatus[]
    not?: NestedEnumIcarStatusWithAggregatesFilter<$PrismaModel> | $Enums.IcarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIcarStatusFilter<$PrismaModel>
    _max?: NestedEnumIcarStatusFilter<$PrismaModel>
  }

  export type EnumScheduleSessionFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleSession | EnumScheduleSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleSession[]
    notIn?: $Enums.ScheduleSession[]
    not?: NestedEnumScheduleSessionFilter<$PrismaModel> | $Enums.ScheduleSession
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IcarScalarRelationFilter = {
    is?: IcarWhereInput
    isNot?: IcarWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    arrivalTime?: SortOrder
    icarId?: SortOrder
    icarStopId?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    icarId?: SortOrder
    icarStopId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    arrivalTime?: SortOrder
    icarId?: SortOrder
    icarStopId?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    session?: SortOrder
    arrivalTime?: SortOrder
    icarId?: SortOrder
    icarStopId?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    icarId?: SortOrder
    icarStopId?: SortOrder
  }

  export type EnumScheduleSessionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleSession | EnumScheduleSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleSession[]
    notIn?: $Enums.ScheduleSession[]
    not?: NestedEnumScheduleSessionWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleSession
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleSessionFilter<$PrismaModel>
    _max?: NestedEnumScheduleSessionFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    review?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    expiredAt?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IcarCreateNestedManyWithoutIcarRouteInput = {
    create?: XOR<IcarCreateWithoutIcarRouteInput, IcarUncheckedCreateWithoutIcarRouteInput> | IcarCreateWithoutIcarRouteInput[] | IcarUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: IcarCreateOrConnectWithoutIcarRouteInput | IcarCreateOrConnectWithoutIcarRouteInput[]
    createMany?: IcarCreateManyIcarRouteInputEnvelope
    connect?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
  }

  export type RouteStopWaypointCreateNestedManyWithoutIcarRouteInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarRouteInput, RouteStopWaypointUncheckedCreateWithoutIcarRouteInput> | RouteStopWaypointCreateWithoutIcarRouteInput[] | RouteStopWaypointUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarRouteInput | RouteStopWaypointCreateOrConnectWithoutIcarRouteInput[]
    createMany?: RouteStopWaypointCreateManyIcarRouteInputEnvelope
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
  }

  export type IcarUncheckedCreateNestedManyWithoutIcarRouteInput = {
    create?: XOR<IcarCreateWithoutIcarRouteInput, IcarUncheckedCreateWithoutIcarRouteInput> | IcarCreateWithoutIcarRouteInput[] | IcarUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: IcarCreateOrConnectWithoutIcarRouteInput | IcarCreateOrConnectWithoutIcarRouteInput[]
    createMany?: IcarCreateManyIcarRouteInputEnvelope
    connect?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
  }

  export type RouteStopWaypointUncheckedCreateNestedManyWithoutIcarRouteInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarRouteInput, RouteStopWaypointUncheckedCreateWithoutIcarRouteInput> | RouteStopWaypointCreateWithoutIcarRouteInput[] | RouteStopWaypointUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarRouteInput | RouteStopWaypointCreateOrConnectWithoutIcarRouteInput[]
    createMany?: RouteStopWaypointCreateManyIcarRouteInputEnvelope
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IcarUpdateManyWithoutIcarRouteNestedInput = {
    create?: XOR<IcarCreateWithoutIcarRouteInput, IcarUncheckedCreateWithoutIcarRouteInput> | IcarCreateWithoutIcarRouteInput[] | IcarUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: IcarCreateOrConnectWithoutIcarRouteInput | IcarCreateOrConnectWithoutIcarRouteInput[]
    upsert?: IcarUpsertWithWhereUniqueWithoutIcarRouteInput | IcarUpsertWithWhereUniqueWithoutIcarRouteInput[]
    createMany?: IcarCreateManyIcarRouteInputEnvelope
    set?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    disconnect?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    delete?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    connect?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    update?: IcarUpdateWithWhereUniqueWithoutIcarRouteInput | IcarUpdateWithWhereUniqueWithoutIcarRouteInput[]
    updateMany?: IcarUpdateManyWithWhereWithoutIcarRouteInput | IcarUpdateManyWithWhereWithoutIcarRouteInput[]
    deleteMany?: IcarScalarWhereInput | IcarScalarWhereInput[]
  }

  export type RouteStopWaypointUpdateManyWithoutIcarRouteNestedInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarRouteInput, RouteStopWaypointUncheckedCreateWithoutIcarRouteInput> | RouteStopWaypointCreateWithoutIcarRouteInput[] | RouteStopWaypointUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarRouteInput | RouteStopWaypointCreateOrConnectWithoutIcarRouteInput[]
    upsert?: RouteStopWaypointUpsertWithWhereUniqueWithoutIcarRouteInput | RouteStopWaypointUpsertWithWhereUniqueWithoutIcarRouteInput[]
    createMany?: RouteStopWaypointCreateManyIcarRouteInputEnvelope
    set?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    disconnect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    delete?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    update?: RouteStopWaypointUpdateWithWhereUniqueWithoutIcarRouteInput | RouteStopWaypointUpdateWithWhereUniqueWithoutIcarRouteInput[]
    updateMany?: RouteStopWaypointUpdateManyWithWhereWithoutIcarRouteInput | RouteStopWaypointUpdateManyWithWhereWithoutIcarRouteInput[]
    deleteMany?: RouteStopWaypointScalarWhereInput | RouteStopWaypointScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IcarUncheckedUpdateManyWithoutIcarRouteNestedInput = {
    create?: XOR<IcarCreateWithoutIcarRouteInput, IcarUncheckedCreateWithoutIcarRouteInput> | IcarCreateWithoutIcarRouteInput[] | IcarUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: IcarCreateOrConnectWithoutIcarRouteInput | IcarCreateOrConnectWithoutIcarRouteInput[]
    upsert?: IcarUpsertWithWhereUniqueWithoutIcarRouteInput | IcarUpsertWithWhereUniqueWithoutIcarRouteInput[]
    createMany?: IcarCreateManyIcarRouteInputEnvelope
    set?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    disconnect?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    delete?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    connect?: IcarWhereUniqueInput | IcarWhereUniqueInput[]
    update?: IcarUpdateWithWhereUniqueWithoutIcarRouteInput | IcarUpdateWithWhereUniqueWithoutIcarRouteInput[]
    updateMany?: IcarUpdateManyWithWhereWithoutIcarRouteInput | IcarUpdateManyWithWhereWithoutIcarRouteInput[]
    deleteMany?: IcarScalarWhereInput | IcarScalarWhereInput[]
  }

  export type RouteStopWaypointUncheckedUpdateManyWithoutIcarRouteNestedInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarRouteInput, RouteStopWaypointUncheckedCreateWithoutIcarRouteInput> | RouteStopWaypointCreateWithoutIcarRouteInput[] | RouteStopWaypointUncheckedCreateWithoutIcarRouteInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarRouteInput | RouteStopWaypointCreateOrConnectWithoutIcarRouteInput[]
    upsert?: RouteStopWaypointUpsertWithWhereUniqueWithoutIcarRouteInput | RouteStopWaypointUpsertWithWhereUniqueWithoutIcarRouteInput[]
    createMany?: RouteStopWaypointCreateManyIcarRouteInputEnvelope
    set?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    disconnect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    delete?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    update?: RouteStopWaypointUpdateWithWhereUniqueWithoutIcarRouteInput | RouteStopWaypointUpdateWithWhereUniqueWithoutIcarRouteInput[]
    updateMany?: RouteStopWaypointUpdateManyWithWhereWithoutIcarRouteInput | RouteStopWaypointUpdateManyWithWhereWithoutIcarRouteInput[]
    deleteMany?: RouteStopWaypointScalarWhereInput | RouteStopWaypointScalarWhereInput[]
  }

  export type RouteStopWaypointCreateNestedManyWithoutIcarStopInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarStopInput, RouteStopWaypointUncheckedCreateWithoutIcarStopInput> | RouteStopWaypointCreateWithoutIcarStopInput[] | RouteStopWaypointUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarStopInput | RouteStopWaypointCreateOrConnectWithoutIcarStopInput[]
    createMany?: RouteStopWaypointCreateManyIcarStopInputEnvelope
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutIcarStopInput = {
    create?: XOR<ScheduleCreateWithoutIcarStopInput, ScheduleUncheckedCreateWithoutIcarStopInput> | ScheduleCreateWithoutIcarStopInput[] | ScheduleUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarStopInput | ScheduleCreateOrConnectWithoutIcarStopInput[]
    createMany?: ScheduleCreateManyIcarStopInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type RouteStopWaypointUncheckedCreateNestedManyWithoutIcarStopInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarStopInput, RouteStopWaypointUncheckedCreateWithoutIcarStopInput> | RouteStopWaypointCreateWithoutIcarStopInput[] | RouteStopWaypointUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarStopInput | RouteStopWaypointCreateOrConnectWithoutIcarStopInput[]
    createMany?: RouteStopWaypointCreateManyIcarStopInputEnvelope
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutIcarStopInput = {
    create?: XOR<ScheduleCreateWithoutIcarStopInput, ScheduleUncheckedCreateWithoutIcarStopInput> | ScheduleCreateWithoutIcarStopInput[] | ScheduleUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarStopInput | ScheduleCreateOrConnectWithoutIcarStopInput[]
    createMany?: ScheduleCreateManyIcarStopInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type RouteStopWaypointUpdateManyWithoutIcarStopNestedInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarStopInput, RouteStopWaypointUncheckedCreateWithoutIcarStopInput> | RouteStopWaypointCreateWithoutIcarStopInput[] | RouteStopWaypointUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarStopInput | RouteStopWaypointCreateOrConnectWithoutIcarStopInput[]
    upsert?: RouteStopWaypointUpsertWithWhereUniqueWithoutIcarStopInput | RouteStopWaypointUpsertWithWhereUniqueWithoutIcarStopInput[]
    createMany?: RouteStopWaypointCreateManyIcarStopInputEnvelope
    set?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    disconnect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    delete?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    update?: RouteStopWaypointUpdateWithWhereUniqueWithoutIcarStopInput | RouteStopWaypointUpdateWithWhereUniqueWithoutIcarStopInput[]
    updateMany?: RouteStopWaypointUpdateManyWithWhereWithoutIcarStopInput | RouteStopWaypointUpdateManyWithWhereWithoutIcarStopInput[]
    deleteMany?: RouteStopWaypointScalarWhereInput | RouteStopWaypointScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutIcarStopNestedInput = {
    create?: XOR<ScheduleCreateWithoutIcarStopInput, ScheduleUncheckedCreateWithoutIcarStopInput> | ScheduleCreateWithoutIcarStopInput[] | ScheduleUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarStopInput | ScheduleCreateOrConnectWithoutIcarStopInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutIcarStopInput | ScheduleUpsertWithWhereUniqueWithoutIcarStopInput[]
    createMany?: ScheduleCreateManyIcarStopInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutIcarStopInput | ScheduleUpdateWithWhereUniqueWithoutIcarStopInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutIcarStopInput | ScheduleUpdateManyWithWhereWithoutIcarStopInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type RouteStopWaypointUncheckedUpdateManyWithoutIcarStopNestedInput = {
    create?: XOR<RouteStopWaypointCreateWithoutIcarStopInput, RouteStopWaypointUncheckedCreateWithoutIcarStopInput> | RouteStopWaypointCreateWithoutIcarStopInput[] | RouteStopWaypointUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: RouteStopWaypointCreateOrConnectWithoutIcarStopInput | RouteStopWaypointCreateOrConnectWithoutIcarStopInput[]
    upsert?: RouteStopWaypointUpsertWithWhereUniqueWithoutIcarStopInput | RouteStopWaypointUpsertWithWhereUniqueWithoutIcarStopInput[]
    createMany?: RouteStopWaypointCreateManyIcarStopInputEnvelope
    set?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    disconnect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    delete?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    connect?: RouteStopWaypointWhereUniqueInput | RouteStopWaypointWhereUniqueInput[]
    update?: RouteStopWaypointUpdateWithWhereUniqueWithoutIcarStopInput | RouteStopWaypointUpdateWithWhereUniqueWithoutIcarStopInput[]
    updateMany?: RouteStopWaypointUpdateManyWithWhereWithoutIcarStopInput | RouteStopWaypointUpdateManyWithWhereWithoutIcarStopInput[]
    deleteMany?: RouteStopWaypointScalarWhereInput | RouteStopWaypointScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutIcarStopNestedInput = {
    create?: XOR<ScheduleCreateWithoutIcarStopInput, ScheduleUncheckedCreateWithoutIcarStopInput> | ScheduleCreateWithoutIcarStopInput[] | ScheduleUncheckedCreateWithoutIcarStopInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarStopInput | ScheduleCreateOrConnectWithoutIcarStopInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutIcarStopInput | ScheduleUpsertWithWhereUniqueWithoutIcarStopInput[]
    createMany?: ScheduleCreateManyIcarStopInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutIcarStopInput | ScheduleUpdateWithWhereUniqueWithoutIcarStopInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutIcarStopInput | ScheduleUpdateManyWithWhereWithoutIcarStopInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type IcarRouteCreateNestedOneWithoutRouteStopWaypointsInput = {
    create?: XOR<IcarRouteCreateWithoutRouteStopWaypointsInput, IcarRouteUncheckedCreateWithoutRouteStopWaypointsInput>
    connectOrCreate?: IcarRouteCreateOrConnectWithoutRouteStopWaypointsInput
    connect?: IcarRouteWhereUniqueInput
  }

  export type IcarStopCreateNestedOneWithoutRouteStopWaypointsInput = {
    create?: XOR<IcarStopCreateWithoutRouteStopWaypointsInput, IcarStopUncheckedCreateWithoutRouteStopWaypointsInput>
    connectOrCreate?: IcarStopCreateOrConnectWithoutRouteStopWaypointsInput
    connect?: IcarStopWhereUniqueInput
  }

  export type IcarRouteUpdateOneRequiredWithoutRouteStopWaypointsNestedInput = {
    create?: XOR<IcarRouteCreateWithoutRouteStopWaypointsInput, IcarRouteUncheckedCreateWithoutRouteStopWaypointsInput>
    connectOrCreate?: IcarRouteCreateOrConnectWithoutRouteStopWaypointsInput
    upsert?: IcarRouteUpsertWithoutRouteStopWaypointsInput
    connect?: IcarRouteWhereUniqueInput
    update?: XOR<XOR<IcarRouteUpdateToOneWithWhereWithoutRouteStopWaypointsInput, IcarRouteUpdateWithoutRouteStopWaypointsInput>, IcarRouteUncheckedUpdateWithoutRouteStopWaypointsInput>
  }

  export type IcarStopUpdateOneRequiredWithoutRouteStopWaypointsNestedInput = {
    create?: XOR<IcarStopCreateWithoutRouteStopWaypointsInput, IcarStopUncheckedCreateWithoutRouteStopWaypointsInput>
    connectOrCreate?: IcarStopCreateOrConnectWithoutRouteStopWaypointsInput
    upsert?: IcarStopUpsertWithoutRouteStopWaypointsInput
    connect?: IcarStopWhereUniqueInput
    update?: XOR<XOR<IcarStopUpdateToOneWithWhereWithoutRouteStopWaypointsInput, IcarStopUpdateWithoutRouteStopWaypointsInput>, IcarStopUncheckedUpdateWithoutRouteStopWaypointsInput>
  }

  export type IcarRouteCreateNestedOneWithoutIcarsInput = {
    create?: XOR<IcarRouteCreateWithoutIcarsInput, IcarRouteUncheckedCreateWithoutIcarsInput>
    connectOrCreate?: IcarRouteCreateOrConnectWithoutIcarsInput
    connect?: IcarRouteWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutIcarInput = {
    create?: XOR<ScheduleCreateWithoutIcarInput, ScheduleUncheckedCreateWithoutIcarInput> | ScheduleCreateWithoutIcarInput[] | ScheduleUncheckedCreateWithoutIcarInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarInput | ScheduleCreateOrConnectWithoutIcarInput[]
    createMany?: ScheduleCreateManyIcarInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutIcarInput = {
    create?: XOR<ScheduleCreateWithoutIcarInput, ScheduleUncheckedCreateWithoutIcarInput> | ScheduleCreateWithoutIcarInput[] | ScheduleUncheckedCreateWithoutIcarInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarInput | ScheduleCreateOrConnectWithoutIcarInput[]
    createMany?: ScheduleCreateManyIcarInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type EnumIcarStatusFieldUpdateOperationsInput = {
    set?: $Enums.IcarStatus
  }

  export type IcarRouteUpdateOneRequiredWithoutIcarsNestedInput = {
    create?: XOR<IcarRouteCreateWithoutIcarsInput, IcarRouteUncheckedCreateWithoutIcarsInput>
    connectOrCreate?: IcarRouteCreateOrConnectWithoutIcarsInput
    upsert?: IcarRouteUpsertWithoutIcarsInput
    connect?: IcarRouteWhereUniqueInput
    update?: XOR<XOR<IcarRouteUpdateToOneWithWhereWithoutIcarsInput, IcarRouteUpdateWithoutIcarsInput>, IcarRouteUncheckedUpdateWithoutIcarsInput>
  }

  export type ScheduleUpdateManyWithoutIcarNestedInput = {
    create?: XOR<ScheduleCreateWithoutIcarInput, ScheduleUncheckedCreateWithoutIcarInput> | ScheduleCreateWithoutIcarInput[] | ScheduleUncheckedCreateWithoutIcarInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarInput | ScheduleCreateOrConnectWithoutIcarInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutIcarInput | ScheduleUpsertWithWhereUniqueWithoutIcarInput[]
    createMany?: ScheduleCreateManyIcarInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutIcarInput | ScheduleUpdateWithWhereUniqueWithoutIcarInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutIcarInput | ScheduleUpdateManyWithWhereWithoutIcarInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutIcarNestedInput = {
    create?: XOR<ScheduleCreateWithoutIcarInput, ScheduleUncheckedCreateWithoutIcarInput> | ScheduleCreateWithoutIcarInput[] | ScheduleUncheckedCreateWithoutIcarInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutIcarInput | ScheduleCreateOrConnectWithoutIcarInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutIcarInput | ScheduleUpsertWithWhereUniqueWithoutIcarInput[]
    createMany?: ScheduleCreateManyIcarInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutIcarInput | ScheduleUpdateWithWhereUniqueWithoutIcarInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutIcarInput | ScheduleUpdateManyWithWhereWithoutIcarInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type IcarCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<IcarCreateWithoutSchedulesInput, IcarUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: IcarCreateOrConnectWithoutSchedulesInput
    connect?: IcarWhereUniqueInput
  }

  export type IcarStopCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<IcarStopCreateWithoutSchedulesInput, IcarStopUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: IcarStopCreateOrConnectWithoutSchedulesInput
    connect?: IcarStopWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumScheduleSessionFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleSession
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IcarUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<IcarCreateWithoutSchedulesInput, IcarUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: IcarCreateOrConnectWithoutSchedulesInput
    upsert?: IcarUpsertWithoutSchedulesInput
    connect?: IcarWhereUniqueInput
    update?: XOR<XOR<IcarUpdateToOneWithWhereWithoutSchedulesInput, IcarUpdateWithoutSchedulesInput>, IcarUncheckedUpdateWithoutSchedulesInput>
  }

  export type IcarStopUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<IcarStopCreateWithoutSchedulesInput, IcarStopUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: IcarStopCreateOrConnectWithoutSchedulesInput
    upsert?: IcarStopUpsertWithoutSchedulesInput
    connect?: IcarStopWhereUniqueInput
    update?: XOR<XOR<IcarStopUpdateToOneWithWhereWithoutSchedulesInput, IcarStopUpdateWithoutSchedulesInput>, IcarStopUncheckedUpdateWithoutSchedulesInput>
  }

  export type TicketUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScheduleInput | TicketUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScheduleInput | TicketUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScheduleInput | TicketUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput> | TicketCreateWithoutScheduleInput[] | TicketUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutScheduleInput | TicketCreateOrConnectWithoutScheduleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutScheduleInput | TicketUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TicketCreateManyScheduleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutScheduleInput | TicketUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutScheduleInput | TicketUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type ScheduleCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ScheduleCreateWithoutTicketsInput, ScheduleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutTicketsInput
    connect?: ScheduleWhereUniqueInput
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type ScheduleUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<ScheduleCreateWithoutTicketsInput, ScheduleUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutTicketsInput
    upsert?: ScheduleUpsertWithoutTicketsInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutTicketsInput, ScheduleUpdateWithoutTicketsInput>, ScheduleUncheckedUpdateWithoutTicketsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumIcarStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IcarStatus | EnumIcarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IcarStatus[]
    notIn?: $Enums.IcarStatus[]
    not?: NestedEnumIcarStatusFilter<$PrismaModel> | $Enums.IcarStatus
  }

  export type NestedEnumIcarStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IcarStatus | EnumIcarStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IcarStatus[]
    notIn?: $Enums.IcarStatus[]
    not?: NestedEnumIcarStatusWithAggregatesFilter<$PrismaModel> | $Enums.IcarStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIcarStatusFilter<$PrismaModel>
    _max?: NestedEnumIcarStatusFilter<$PrismaModel>
  }

  export type NestedEnumScheduleSessionFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleSession | EnumScheduleSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleSession[]
    notIn?: $Enums.ScheduleSession[]
    not?: NestedEnumScheduleSessionFilter<$PrismaModel> | $Enums.ScheduleSession
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumScheduleSessionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleSession | EnumScheduleSessionFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleSession[]
    notIn?: $Enums.ScheduleSession[]
    not?: NestedEnumScheduleSessionWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleSession
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleSessionFilter<$PrismaModel>
    _max?: NestedEnumScheduleSessionFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[]
    notIn?: $Enums.TicketStatus[]
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type IcarCreateWithoutIcarRouteInput = {
    name: string
    capacity: number
    status?: $Enums.IcarStatus
    schedules?: ScheduleCreateNestedManyWithoutIcarInput
  }

  export type IcarUncheckedCreateWithoutIcarRouteInput = {
    id?: number
    name: string
    capacity: number
    status?: $Enums.IcarStatus
    schedules?: ScheduleUncheckedCreateNestedManyWithoutIcarInput
  }

  export type IcarCreateOrConnectWithoutIcarRouteInput = {
    where: IcarWhereUniqueInput
    create: XOR<IcarCreateWithoutIcarRouteInput, IcarUncheckedCreateWithoutIcarRouteInput>
  }

  export type IcarCreateManyIcarRouteInputEnvelope = {
    data: IcarCreateManyIcarRouteInput | IcarCreateManyIcarRouteInput[]
    skipDuplicates?: boolean
  }

  export type RouteStopWaypointCreateWithoutIcarRouteInput = {
    order: number
    icarStop: IcarStopCreateNestedOneWithoutRouteStopWaypointsInput
  }

  export type RouteStopWaypointUncheckedCreateWithoutIcarRouteInput = {
    id?: number
    icarStopId: number
    order: number
  }

  export type RouteStopWaypointCreateOrConnectWithoutIcarRouteInput = {
    where: RouteStopWaypointWhereUniqueInput
    create: XOR<RouteStopWaypointCreateWithoutIcarRouteInput, RouteStopWaypointUncheckedCreateWithoutIcarRouteInput>
  }

  export type RouteStopWaypointCreateManyIcarRouteInputEnvelope = {
    data: RouteStopWaypointCreateManyIcarRouteInput | RouteStopWaypointCreateManyIcarRouteInput[]
    skipDuplicates?: boolean
  }

  export type IcarUpsertWithWhereUniqueWithoutIcarRouteInput = {
    where: IcarWhereUniqueInput
    update: XOR<IcarUpdateWithoutIcarRouteInput, IcarUncheckedUpdateWithoutIcarRouteInput>
    create: XOR<IcarCreateWithoutIcarRouteInput, IcarUncheckedCreateWithoutIcarRouteInput>
  }

  export type IcarUpdateWithWhereUniqueWithoutIcarRouteInput = {
    where: IcarWhereUniqueInput
    data: XOR<IcarUpdateWithoutIcarRouteInput, IcarUncheckedUpdateWithoutIcarRouteInput>
  }

  export type IcarUpdateManyWithWhereWithoutIcarRouteInput = {
    where: IcarScalarWhereInput
    data: XOR<IcarUpdateManyMutationInput, IcarUncheckedUpdateManyWithoutIcarRouteInput>
  }

  export type IcarScalarWhereInput = {
    AND?: IcarScalarWhereInput | IcarScalarWhereInput[]
    OR?: IcarScalarWhereInput[]
    NOT?: IcarScalarWhereInput | IcarScalarWhereInput[]
    id?: IntFilter<"Icar"> | number
    name?: StringFilter<"Icar"> | string
    capacity?: IntFilter<"Icar"> | number
    status?: EnumIcarStatusFilter<"Icar"> | $Enums.IcarStatus
    icarRouteId?: IntFilter<"Icar"> | number
  }

  export type RouteStopWaypointUpsertWithWhereUniqueWithoutIcarRouteInput = {
    where: RouteStopWaypointWhereUniqueInput
    update: XOR<RouteStopWaypointUpdateWithoutIcarRouteInput, RouteStopWaypointUncheckedUpdateWithoutIcarRouteInput>
    create: XOR<RouteStopWaypointCreateWithoutIcarRouteInput, RouteStopWaypointUncheckedCreateWithoutIcarRouteInput>
  }

  export type RouteStopWaypointUpdateWithWhereUniqueWithoutIcarRouteInput = {
    where: RouteStopWaypointWhereUniqueInput
    data: XOR<RouteStopWaypointUpdateWithoutIcarRouteInput, RouteStopWaypointUncheckedUpdateWithoutIcarRouteInput>
  }

  export type RouteStopWaypointUpdateManyWithWhereWithoutIcarRouteInput = {
    where: RouteStopWaypointScalarWhereInput
    data: XOR<RouteStopWaypointUpdateManyMutationInput, RouteStopWaypointUncheckedUpdateManyWithoutIcarRouteInput>
  }

  export type RouteStopWaypointScalarWhereInput = {
    AND?: RouteStopWaypointScalarWhereInput | RouteStopWaypointScalarWhereInput[]
    OR?: RouteStopWaypointScalarWhereInput[]
    NOT?: RouteStopWaypointScalarWhereInput | RouteStopWaypointScalarWhereInput[]
    id?: IntFilter<"RouteStopWaypoint"> | number
    icarRouteId?: IntFilter<"RouteStopWaypoint"> | number
    icarStopId?: IntFilter<"RouteStopWaypoint"> | number
    order?: IntFilter<"RouteStopWaypoint"> | number
  }

  export type RouteStopWaypointCreateWithoutIcarStopInput = {
    order: number
    icarRoute: IcarRouteCreateNestedOneWithoutRouteStopWaypointsInput
  }

  export type RouteStopWaypointUncheckedCreateWithoutIcarStopInput = {
    id?: number
    icarRouteId: number
    order: number
  }

  export type RouteStopWaypointCreateOrConnectWithoutIcarStopInput = {
    where: RouteStopWaypointWhereUniqueInput
    create: XOR<RouteStopWaypointCreateWithoutIcarStopInput, RouteStopWaypointUncheckedCreateWithoutIcarStopInput>
  }

  export type RouteStopWaypointCreateManyIcarStopInputEnvelope = {
    data: RouteStopWaypointCreateManyIcarStopInput | RouteStopWaypointCreateManyIcarStopInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutIcarStopInput = {
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icar: IcarCreateNestedOneWithoutSchedulesInput
    tickets?: TicketCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutIcarStopInput = {
    id?: number
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarId: number
    tickets?: TicketUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutIcarStopInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutIcarStopInput, ScheduleUncheckedCreateWithoutIcarStopInput>
  }

  export type ScheduleCreateManyIcarStopInputEnvelope = {
    data: ScheduleCreateManyIcarStopInput | ScheduleCreateManyIcarStopInput[]
    skipDuplicates?: boolean
  }

  export type RouteStopWaypointUpsertWithWhereUniqueWithoutIcarStopInput = {
    where: RouteStopWaypointWhereUniqueInput
    update: XOR<RouteStopWaypointUpdateWithoutIcarStopInput, RouteStopWaypointUncheckedUpdateWithoutIcarStopInput>
    create: XOR<RouteStopWaypointCreateWithoutIcarStopInput, RouteStopWaypointUncheckedCreateWithoutIcarStopInput>
  }

  export type RouteStopWaypointUpdateWithWhereUniqueWithoutIcarStopInput = {
    where: RouteStopWaypointWhereUniqueInput
    data: XOR<RouteStopWaypointUpdateWithoutIcarStopInput, RouteStopWaypointUncheckedUpdateWithoutIcarStopInput>
  }

  export type RouteStopWaypointUpdateManyWithWhereWithoutIcarStopInput = {
    where: RouteStopWaypointScalarWhereInput
    data: XOR<RouteStopWaypointUpdateManyMutationInput, RouteStopWaypointUncheckedUpdateManyWithoutIcarStopInput>
  }

  export type ScheduleUpsertWithWhereUniqueWithoutIcarStopInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutIcarStopInput, ScheduleUncheckedUpdateWithoutIcarStopInput>
    create: XOR<ScheduleCreateWithoutIcarStopInput, ScheduleUncheckedCreateWithoutIcarStopInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutIcarStopInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutIcarStopInput, ScheduleUncheckedUpdateWithoutIcarStopInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutIcarStopInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutIcarStopInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    session?: EnumScheduleSessionFilter<"Schedule"> | $Enums.ScheduleSession
    arrivalTime?: DateTimeFilter<"Schedule"> | Date | string
    icarId?: IntFilter<"Schedule"> | number
    icarStopId?: IntFilter<"Schedule"> | number
  }

  export type IcarRouteCreateWithoutRouteStopWaypointsInput = {
    name: string
    color: string
    icars?: IcarCreateNestedManyWithoutIcarRouteInput
  }

  export type IcarRouteUncheckedCreateWithoutRouteStopWaypointsInput = {
    id?: number
    name: string
    color: string
    icars?: IcarUncheckedCreateNestedManyWithoutIcarRouteInput
  }

  export type IcarRouteCreateOrConnectWithoutRouteStopWaypointsInput = {
    where: IcarRouteWhereUniqueInput
    create: XOR<IcarRouteCreateWithoutRouteStopWaypointsInput, IcarRouteUncheckedCreateWithoutRouteStopWaypointsInput>
  }

  export type IcarStopCreateWithoutRouteStopWaypointsInput = {
    name: string
    coordinate: JsonNullValueInput | InputJsonValue
    schedules?: ScheduleCreateNestedManyWithoutIcarStopInput
  }

  export type IcarStopUncheckedCreateWithoutRouteStopWaypointsInput = {
    id?: number
    name: string
    coordinate: JsonNullValueInput | InputJsonValue
    schedules?: ScheduleUncheckedCreateNestedManyWithoutIcarStopInput
  }

  export type IcarStopCreateOrConnectWithoutRouteStopWaypointsInput = {
    where: IcarStopWhereUniqueInput
    create: XOR<IcarStopCreateWithoutRouteStopWaypointsInput, IcarStopUncheckedCreateWithoutRouteStopWaypointsInput>
  }

  export type IcarRouteUpsertWithoutRouteStopWaypointsInput = {
    update: XOR<IcarRouteUpdateWithoutRouteStopWaypointsInput, IcarRouteUncheckedUpdateWithoutRouteStopWaypointsInput>
    create: XOR<IcarRouteCreateWithoutRouteStopWaypointsInput, IcarRouteUncheckedCreateWithoutRouteStopWaypointsInput>
    where?: IcarRouteWhereInput
  }

  export type IcarRouteUpdateToOneWithWhereWithoutRouteStopWaypointsInput = {
    where?: IcarRouteWhereInput
    data: XOR<IcarRouteUpdateWithoutRouteStopWaypointsInput, IcarRouteUncheckedUpdateWithoutRouteStopWaypointsInput>
  }

  export type IcarRouteUpdateWithoutRouteStopWaypointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icars?: IcarUpdateManyWithoutIcarRouteNestedInput
  }

  export type IcarRouteUncheckedUpdateWithoutRouteStopWaypointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icars?: IcarUncheckedUpdateManyWithoutIcarRouteNestedInput
  }

  export type IcarStopUpsertWithoutRouteStopWaypointsInput = {
    update: XOR<IcarStopUpdateWithoutRouteStopWaypointsInput, IcarStopUncheckedUpdateWithoutRouteStopWaypointsInput>
    create: XOR<IcarStopCreateWithoutRouteStopWaypointsInput, IcarStopUncheckedCreateWithoutRouteStopWaypointsInput>
    where?: IcarStopWhereInput
  }

  export type IcarStopUpdateToOneWithWhereWithoutRouteStopWaypointsInput = {
    where?: IcarStopWhereInput
    data: XOR<IcarStopUpdateWithoutRouteStopWaypointsInput, IcarStopUncheckedUpdateWithoutRouteStopWaypointsInput>
  }

  export type IcarStopUpdateWithoutRouteStopWaypointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
    schedules?: ScheduleUpdateManyWithoutIcarStopNestedInput
  }

  export type IcarStopUncheckedUpdateWithoutRouteStopWaypointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
    schedules?: ScheduleUncheckedUpdateManyWithoutIcarStopNestedInput
  }

  export type IcarRouteCreateWithoutIcarsInput = {
    name: string
    color: string
    routeStopWaypoints?: RouteStopWaypointCreateNestedManyWithoutIcarRouteInput
  }

  export type IcarRouteUncheckedCreateWithoutIcarsInput = {
    id?: number
    name: string
    color: string
    routeStopWaypoints?: RouteStopWaypointUncheckedCreateNestedManyWithoutIcarRouteInput
  }

  export type IcarRouteCreateOrConnectWithoutIcarsInput = {
    where: IcarRouteWhereUniqueInput
    create: XOR<IcarRouteCreateWithoutIcarsInput, IcarRouteUncheckedCreateWithoutIcarsInput>
  }

  export type ScheduleCreateWithoutIcarInput = {
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarStop: IcarStopCreateNestedOneWithoutSchedulesInput
    tickets?: TicketCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutIcarInput = {
    id?: number
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarStopId: number
    tickets?: TicketUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutIcarInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutIcarInput, ScheduleUncheckedCreateWithoutIcarInput>
  }

  export type ScheduleCreateManyIcarInputEnvelope = {
    data: ScheduleCreateManyIcarInput | ScheduleCreateManyIcarInput[]
    skipDuplicates?: boolean
  }

  export type IcarRouteUpsertWithoutIcarsInput = {
    update: XOR<IcarRouteUpdateWithoutIcarsInput, IcarRouteUncheckedUpdateWithoutIcarsInput>
    create: XOR<IcarRouteCreateWithoutIcarsInput, IcarRouteUncheckedCreateWithoutIcarsInput>
    where?: IcarRouteWhereInput
  }

  export type IcarRouteUpdateToOneWithWhereWithoutIcarsInput = {
    where?: IcarRouteWhereInput
    data: XOR<IcarRouteUpdateWithoutIcarsInput, IcarRouteUncheckedUpdateWithoutIcarsInput>
  }

  export type IcarRouteUpdateWithoutIcarsInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    routeStopWaypoints?: RouteStopWaypointUpdateManyWithoutIcarRouteNestedInput
  }

  export type IcarRouteUncheckedUpdateWithoutIcarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    routeStopWaypoints?: RouteStopWaypointUncheckedUpdateManyWithoutIcarRouteNestedInput
  }

  export type ScheduleUpsertWithWhereUniqueWithoutIcarInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutIcarInput, ScheduleUncheckedUpdateWithoutIcarInput>
    create: XOR<ScheduleCreateWithoutIcarInput, ScheduleUncheckedCreateWithoutIcarInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutIcarInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutIcarInput, ScheduleUncheckedUpdateWithoutIcarInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutIcarInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutIcarInput>
  }

  export type IcarCreateWithoutSchedulesInput = {
    name: string
    capacity: number
    status?: $Enums.IcarStatus
    icarRoute: IcarRouteCreateNestedOneWithoutIcarsInput
  }

  export type IcarUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    capacity: number
    status?: $Enums.IcarStatus
    icarRouteId: number
  }

  export type IcarCreateOrConnectWithoutSchedulesInput = {
    where: IcarWhereUniqueInput
    create: XOR<IcarCreateWithoutSchedulesInput, IcarUncheckedCreateWithoutSchedulesInput>
  }

  export type IcarStopCreateWithoutSchedulesInput = {
    name: string
    coordinate: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointCreateNestedManyWithoutIcarStopInput
  }

  export type IcarStopUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    coordinate: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointUncheckedCreateNestedManyWithoutIcarStopInput
  }

  export type IcarStopCreateOrConnectWithoutSchedulesInput = {
    where: IcarStopWhereUniqueInput
    create: XOR<IcarStopCreateWithoutSchedulesInput, IcarStopUncheckedCreateWithoutSchedulesInput>
  }

  export type TicketCreateWithoutScheduleInput = {
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    review?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutScheduleInput = {
    id?: number
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    userId: number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketCreateOrConnectWithoutScheduleInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput>
  }

  export type TicketCreateManyScheduleInputEnvelope = {
    data: TicketCreateManyScheduleInput | TicketCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type IcarUpsertWithoutSchedulesInput = {
    update: XOR<IcarUpdateWithoutSchedulesInput, IcarUncheckedUpdateWithoutSchedulesInput>
    create: XOR<IcarCreateWithoutSchedulesInput, IcarUncheckedCreateWithoutSchedulesInput>
    where?: IcarWhereInput
  }

  export type IcarUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: IcarWhereInput
    data: XOR<IcarUpdateWithoutSchedulesInput, IcarUncheckedUpdateWithoutSchedulesInput>
  }

  export type IcarUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
    icarRoute?: IcarRouteUpdateOneRequiredWithoutIcarsNestedInput
  }

  export type IcarUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
    icarRouteId?: IntFieldUpdateOperationsInput | number
  }

  export type IcarStopUpsertWithoutSchedulesInput = {
    update: XOR<IcarStopUpdateWithoutSchedulesInput, IcarStopUncheckedUpdateWithoutSchedulesInput>
    create: XOR<IcarStopCreateWithoutSchedulesInput, IcarStopUncheckedCreateWithoutSchedulesInput>
    where?: IcarStopWhereInput
  }

  export type IcarStopUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: IcarStopWhereInput
    data: XOR<IcarStopUpdateWithoutSchedulesInput, IcarStopUncheckedUpdateWithoutSchedulesInput>
  }

  export type IcarStopUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointUpdateManyWithoutIcarStopNestedInput
  }

  export type IcarStopUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    coordinate?: JsonNullValueInput | InputJsonValue
    routeStopWaypoints?: RouteStopWaypointUncheckedUpdateManyWithoutIcarStopNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutScheduleInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutScheduleInput, TicketUncheckedUpdateWithoutScheduleInput>
    create: XOR<TicketCreateWithoutScheduleInput, TicketUncheckedCreateWithoutScheduleInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutScheduleInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutScheduleInput, TicketUncheckedUpdateWithoutScheduleInput>
  }

  export type TicketUpdateManyWithWhereWithoutScheduleInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutScheduleInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    expiredAt?: DateTimeFilter<"Ticket"> | Date | string
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    userId?: IntFilter<"Ticket"> | number
    scheduleId?: IntFilter<"Ticket"> | number
    review?: JsonNullableFilter<"Ticket">
  }

  export type TicketCreateWithoutUserInput = {
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    review?: NullableJsonNullValueInput | InputJsonValue
    schedule: ScheduleCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: number
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    scheduleId: number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCreateWithoutTicketsInput = {
    name: string
    email: string
    password: string
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    email: string
    password: string
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type ScheduleCreateWithoutTicketsInput = {
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icar: IcarCreateNestedOneWithoutSchedulesInput
    icarStop: IcarStopCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutTicketsInput = {
    id?: number
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarId: number
    icarStopId: number
  }

  export type ScheduleCreateOrConnectWithoutTicketsInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutTicketsInput, ScheduleUncheckedCreateWithoutTicketsInput>
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUpsertWithoutTicketsInput = {
    update: XOR<ScheduleUpdateWithoutTicketsInput, ScheduleUncheckedUpdateWithoutTicketsInput>
    create: XOR<ScheduleCreateWithoutTicketsInput, ScheduleUncheckedCreateWithoutTicketsInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutTicketsInput, ScheduleUncheckedUpdateWithoutTicketsInput>
  }

  export type ScheduleUpdateWithoutTicketsInput = {
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icar?: IcarUpdateOneRequiredWithoutSchedulesNestedInput
    icarStop?: IcarStopUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarId?: IntFieldUpdateOperationsInput | number
    icarStopId?: IntFieldUpdateOperationsInput | number
  }

  export type IcarCreateManyIcarRouteInput = {
    id?: number
    name: string
    capacity: number
    status?: $Enums.IcarStatus
  }

  export type RouteStopWaypointCreateManyIcarRouteInput = {
    id?: number
    icarStopId: number
    order: number
  }

  export type IcarUpdateWithoutIcarRouteInput = {
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
    schedules?: ScheduleUpdateManyWithoutIcarNestedInput
  }

  export type IcarUncheckedUpdateWithoutIcarRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
    schedules?: ScheduleUncheckedUpdateManyWithoutIcarNestedInput
  }

  export type IcarUncheckedUpdateManyWithoutIcarRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumIcarStatusFieldUpdateOperationsInput | $Enums.IcarStatus
  }

  export type RouteStopWaypointUpdateWithoutIcarRouteInput = {
    order?: IntFieldUpdateOperationsInput | number
    icarStop?: IcarStopUpdateOneRequiredWithoutRouteStopWaypointsNestedInput
  }

  export type RouteStopWaypointUncheckedUpdateWithoutIcarRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    icarStopId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RouteStopWaypointUncheckedUpdateManyWithoutIcarRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    icarStopId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RouteStopWaypointCreateManyIcarStopInput = {
    id?: number
    icarRouteId: number
    order: number
  }

  export type ScheduleCreateManyIcarStopInput = {
    id?: number
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarId: number
  }

  export type RouteStopWaypointUpdateWithoutIcarStopInput = {
    order?: IntFieldUpdateOperationsInput | number
    icarRoute?: IcarRouteUpdateOneRequiredWithoutRouteStopWaypointsNestedInput
  }

  export type RouteStopWaypointUncheckedUpdateWithoutIcarStopInput = {
    id?: IntFieldUpdateOperationsInput | number
    icarRouteId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RouteStopWaypointUncheckedUpdateManyWithoutIcarStopInput = {
    id?: IntFieldUpdateOperationsInput | number
    icarRouteId?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleUpdateWithoutIcarStopInput = {
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icar?: IcarUpdateOneRequiredWithoutSchedulesNestedInput
    tickets?: TicketUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutIcarStopInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarId?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutIcarStopInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarId?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateManyIcarInput = {
    id?: number
    session: $Enums.ScheduleSession
    arrivalTime: Date | string
    icarStopId: number
  }

  export type ScheduleUpdateWithoutIcarInput = {
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarStop?: IcarStopUpdateOneRequiredWithoutSchedulesNestedInput
    tickets?: TicketUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutIcarInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarStopId?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutIcarInput = {
    id?: IntFieldUpdateOperationsInput | number
    session?: EnumScheduleSessionFieldUpdateOperationsInput | $Enums.ScheduleSession
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    icarStopId?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyScheduleInput = {
    id?: number
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    userId: number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUpdateWithoutScheduleInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    review?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    userId?: IntFieldUpdateOperationsInput | number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    userId?: IntFieldUpdateOperationsInput | number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketCreateManyUserInput = {
    id?: number
    expiredAt: Date | string
    status?: $Enums.TicketStatus
    scheduleId: number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUpdateWithoutUserInput = {
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    review?: NullableJsonNullValueInput | InputJsonValue
    schedule?: ScheduleUpdateOneRequiredWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    scheduleId?: IntFieldUpdateOperationsInput | number
    review?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    scheduleId?: IntFieldUpdateOperationsInput | number
    review?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
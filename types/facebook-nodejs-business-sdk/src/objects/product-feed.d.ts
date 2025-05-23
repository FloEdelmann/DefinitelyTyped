import { AbstractCrudObject } from "./../abstract-crud-object";
import AbstractObject from "./../abstract-object";
import Cursor from "./../cursor";
import ProductFeedRule from "./product-feed-rule";
import ProductFeedUpload from "./product-feed-upload";
/**
 * ProductFeed
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductFeed extends AbstractCrudObject {
    static get Fields(): Readonly<{
        country: "country";
        created_time: "created_time";
        default_currency: "default_currency";
        deletion_enabled: "deletion_enabled";
        delimiter: "delimiter";
        encoding: "encoding";
        file_name: "file_name";
        id: "id";
        ingestion_source_type: "ingestion_source_type";
        item_sub_type: "item_sub_type";
        latest_upload: "latest_upload";
        migrated_from_feed_id: "migrated_from_feed_id";
        name: "name";
        override_type: "override_type";
        primary_feeds: "primary_feeds";
        product_count: "product_count";
        quoted_fields_mode: "quoted_fields_mode";
        schedule: "schedule";
        supplementary_feeds: "supplementary_feeds";
        update_schedule: "update_schedule";
    }>;
    static get Delimiter(): Readonly<{
        autodetect: "AUTODETECT";
        bar: "BAR";
        comma: "COMMA";
        semicolon: "SEMICOLON";
        tab: "TAB";
        tilde: "TILDE";
    }>;
    static get IngestionSourceType(): Readonly<{
        primary_feed: "primary_feed";
        supplementary_feed: "supplementary_feed";
    }>;
    static get QuotedFieldsMode(): Readonly<{
        autodetect: "AUTODETECT";
        off: "OFF";
        on: "ON";
    }>;
    static get Encoding(): Readonly<{
        autodetect: "AUTODETECT";
        latin1: "LATIN1";
        utf16be: "UTF16BE";
        utf16le: "UTF16LE";
        utf32be: "UTF32BE";
        utf32le: "UTF32LE";
        utf8: "UTF8";
    }>;
    static get FeedType(): Readonly<{
        automotive_model: "AUTOMOTIVE_MODEL";
        collection: "COLLECTION";
        destination: "DESTINATION";
        flight: "FLIGHT";
        home_listing: "HOME_LISTING";
        hotel: "HOTEL";
        hotel_room: "HOTEL_ROOM";
        local_inventory: "LOCAL_INVENTORY";
        media_title: "MEDIA_TITLE";
        offer: "OFFER";
        products: "PRODUCTS";
        transactable_items: "TRANSACTABLE_ITEMS";
        vehicles: "VEHICLES";
        vehicle_offer: "VEHICLE_OFFER";
    }>;
    static get ItemSubType(): Readonly<{
        appliances: "APPLIANCES";
        baby_feeding: "BABY_FEEDING";
        baby_transport: "BABY_TRANSPORT";
        beauty: "BEAUTY";
        bedding: "BEDDING";
        cameras: "CAMERAS";
        cell_phones_and_smart_watches: "CELL_PHONES_AND_SMART_WATCHES";
        cleaning_supplies: "CLEANING_SUPPLIES";
        clothing: "CLOTHING";
        clothing_accessories: "CLOTHING_ACCESSORIES";
        computers_and_tablets: "COMPUTERS_AND_TABLETS";
        diapering_and_potty_training: "DIAPERING_AND_POTTY_TRAINING";
        electronics_accessories: "ELECTRONICS_ACCESSORIES";
        furniture: "FURNITURE";
        health: "HEALTH";
        home_goods: "HOME_GOODS";
        jewelry: "JEWELRY";
        nursery: "NURSERY";
        printers_and_scanners: "PRINTERS_AND_SCANNERS";
        projectors: "PROJECTORS";
        shoes_and_footwear: "SHOES_AND_FOOTWEAR";
        software: "SOFTWARE";
        toys: "TOYS";
        tvs_and_monitors: "TVS_AND_MONITORS";
        video_game_consoles_and_video_games: "VIDEO_GAME_CONSOLES_AND_VIDEO_GAMES";
        watches: "WATCHES";
    }>;
    static get OverrideType(): Readonly<{
        batch_api_language_or_country: "BATCH_API_LANGUAGE_OR_COUNTRY";
        catalog_segment_customize_default: "CATALOG_SEGMENT_CUSTOMIZE_DEFAULT";
        country: "COUNTRY";
        language: "LANGUAGE";
        language_and_country: "LANGUAGE_AND_COUNTRY";
        local: "LOCAL";
        smart_pixel_language_or_country: "SMART_PIXEL_LANGUAGE_OR_COUNTRY";
        version: "VERSION";
    }>;
    getAutomotiveModels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getDestinations(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getFlights(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHomeListings(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getHotels(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getMediaTitles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getProducts(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getRules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createRule(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeedRule>;
    createSupplementaryFeedAssoc(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<AbstractObject>;
    getUploadSchedules(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUploadSchedule(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeed>;
    getUploads(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    createUpload(fields: string[], params?: Record<string, any>, pathOverride?: string | null): Promise<ProductFeedUpload>;
    getVehicleOffers(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    getVehicles(fields: string[], params?: Record<string, any>, fetchFirstPage?: boolean): Cursor | Promise<Cursor>;
    delete(fields: string[], params?: Record<string, any>): Promise<AbstractObject>;
    get(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;
    update(fields: string[], params?: Record<string, any>): Promise<ProductFeed>;
}

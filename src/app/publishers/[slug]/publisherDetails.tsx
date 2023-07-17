"use client";

import Loading from "./loading";
import GameCard from "@/components/Card/GameCard";
import { FetchingNextPage } from "@/components/Common/Loading";
import usePublisherDetails from "./usePublisherDetails";

const PublisherDetails = () => {
    const {
        isError,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        publishersDetail,
        formattedData,
        ref,
    } = usePublisherDetails();

    if (isLoading) return <Loading />;

    if (isError) return <p>Error...</p>;

    return (
        <div className="default-section-padding">
            <div className="mb-5">
                <p className="heading mb-5">
                    Published By {publishersDetail?.name}
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
                {formattedData?.map((data) => (
                    <GameCard key={data.id} data={data} />
                ))}
            </div>

            <div ref={ref}>
                {hasNextPage ? (
                    isFetchingNextPage && <FetchingNextPage />
                ) : (
                    <p className="text-white text-center mt-3">
                        No More Results
                    </p>
                )}
            </div>
        </div>
    );
};

export default PublisherDetails;

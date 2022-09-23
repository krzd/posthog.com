import React from 'react'
import InfoIcon from '../InfoIcon/Index'
import CheckIcon from '../../images/check.svg'
import XIcon from '../../images/x.svg'
import Link from 'components/Link'

type FeatureAvailabilityProps = {
    availability:
        | {
              openSource?: boolean
              free: boolean
              selfServe: boolean
              enterprise: boolean
          }
        | boolean
}

const renderAvailabilityIcon = (isAvailable: boolean) => {
    return isAvailable ? (
        <img src={CheckIcon} alt="Available" className="h-4 w-4 mr-2" aria-hidden="true" />
    ) : (
        <img src={XIcon} alt="Not available" className="h-4 w-4 mr-2" aria-hidden="true" />
    )
}

export function FeatureAvailability({ availability }: FeatureAvailabilityProps): JSX.Element {
    const diffOpenSource = typeof availability !== 'boolean' && 'openSource' in availability

    return (
        <div className="border-t border-b border-dashed border-gray-accent-light dark:border-gray-accent-dark py-2 space-y-2 mt-2 mb-5 ">
            <h6 className="text-primary/50 dark:text-primary-dark/50 !my-0 font-semibold text-base">
                Where is this feature available?
            </h6>

            <div
                className={`grid grid-flow-col-dense ${
                    diffOpenSource
                        ? 'grid-rows-4 grid-cols-2 sm:grid-cols-4 sm:grid-rows-2'
                        : 'grid-rows-3 grid-cols-2 sm:grid-cols-3 sm:grid-rows-2'
                } sm:grid-flow-row-dense gap-x-4 items-center`}
            >
                {diffOpenSource ? (
                    <div>
                        <h5 className="flex items-center space-x-1.5 text-base !my-0">
                            <span>Open-source</span>
                            <Link
                                to="/pricing?realm=self-hosted"
                                className="!pb-0 group hover:!bg-none active:!bg-none focus:!bg-none"
                            >
                                <InfoIcon className="w-4 h-4 opacity-75 group-hover:opacity-100 relative transform transition-all group-hover:scale-[1.2] active:top-[1px] active:scale-[1.1]" />
                            </Link>
                        </h5>
                    </div>
                ) : null}

                <div>
                    <h5 className="flex items-center space-x-1.5 text-base !my-0">
                        {diffOpenSource ? <span>Free</span> : <span>Free / Open-source</span>}
                        <Link
                            to="/pricing?realm=self-hosted"
                            className="!pb-0 group hover:!bg-none active:!bg-none focus:!bg-none"
                        >
                            <InfoIcon className="w-4 h-4 opacity-75 group-hover:opacity-100 relative transform transition-all group-hover:scale-[1.2] active:top-[1px] active:scale-[1.1]" />
                        </Link>
                    </h5>
                </div>

                <div>
                    <h5 className="flex items-center space-x-1.5 text-base !my-0">
                        <span>Self-serve</span>
                        <Link
                            to="/pricing?realm=cloud"
                            className="!pb-0 group hover:!bg-none active:!bg-none focus:!bg-none"
                        >
                            <InfoIcon className="w-4 h-4 opacity-75 group-hover:opacity-100 relative transform transition-all group-hover:scale-[1.2] active:top-[1px] active:scale-[1.1]" />
                        </Link>
                    </h5>
                </div>

                <div>
                    <h5 className="flex items-center space-x-1.5 text-base !my-0">
                        <span>Enterprise</span>
                        <Link
                            to="/pricing?realm=cloud"
                            className="!pb-0 group hover:!bg-none active:!bg-none focus:!bg-none"
                        >
                            <InfoIcon className="w-4 h-4 opacity-75 group-hover:opacity-100 relative transform transition-all group-hover:scale-[1.2] active:top-[1px] active:scale-[1.1]" />
                        </Link>
                    </h5>
                </div>

                {diffOpenSource ? renderAvailabilityIcon(availability.openSource || false) : null}

                {renderAvailabilityIcon(typeof availability === 'boolean' ? availability : availability.free)}

                {renderAvailabilityIcon(typeof availability === 'boolean' ? availability : availability.selfServe)}

                {renderAvailabilityIcon(typeof availability === 'boolean' ? availability : availability.enterprise)}
            </div>
        </div>
    )
}

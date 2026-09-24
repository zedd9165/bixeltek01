'use client'

import React from 'react'
import { FaAward, FaClinicMedical, FaMapMarkerAlt, FaCheckDouble } from 'react-icons/fa'

export default function CanadaTrustStrip() {
  const trustSignals = [
    {
      icon: FaAward,
      title: 'Google Partner Certified',
      description: 'Official Premier Partner agency status with audited ad management standards.',
    },
    {
      icon: FaClinicMedical,
      title: '100+ Dental Practices Served',
      description: 'Extensive hands-on experience helping dental clinics acquire booked patients.',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Canadian Market Experience',
      description: 'Active campaigns and verified case studies across Ontario and Canadian metros.',
    },
    {
      icon: FaCheckDouble,
      title: 'One Clinic Per City Policy',
      description: 'We protect your local catchment area and do not market your direct competitors.',
    },
  ]

  return (
    <section className="bg-gray-50 border-y border-gray-200/80 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200/70 shadow-2xs hover:border-blue-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-950 mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

